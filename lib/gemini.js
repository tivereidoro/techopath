import { API_KEY } from "@/utils/const";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

if (!API_KEY) {
  throw new Error("Missing NEXT_PUBLIC_GEMINI_API_KEY environment variable");
}

const genAI = new GoogleGenerativeAI(API_KEY);
// Initialize model without default generationConfig/safetySettings here,
// as we'll pass them per request for clarity.
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

// These will be passed directly in the generateContent call
const generationConfigForRequest = {
  temperature: 0.7,
  topK: 0,
  topP: 0.95,
  maxOutputTokens: 8192,
  response_mime_type: "application/json", // Crucial for structured output
};

const safetySettingsForRequest = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

// Updated helper function to clean the AI response
function cleanJsonString(str) {
  if (typeof str !== "string") {
    console.warn("cleanJsonString received non-string input:", str);
    return ""; // Or throw an error, or return str if it might be valid non-string
  }
  // console.log("cleanJsonString input (raw):", str);
  // console.log("cleanJsonString input (JSON.stringify to see hidden chars):", JSON.stringify(str));

  let cleaned = str.trim();

  // Most common case: ```json ... ```
  if (cleaned.startsWith("```json") && cleaned.endsWith("```")) {
    // console.log("Attempting to strip ```json prefix and ``` suffix");
    cleaned = cleaned.substring(
      "```json".length,
      cleaned.length - "```".length
    );
    cleaned = cleaned.trim(); // Trim again after stripping
    // console.log("Cleaned (after ```json strip):", cleaned);
    return cleaned;
  }

  // Case: ``` ... ``` (generic markdown code block)
  if (cleaned.startsWith("```") && cleaned.endsWith("```")) {
    // console.log("Attempting to strip generic ``` prefix and ``` suffix");
    cleaned = cleaned.substring("```".length, cleaned.length - "```".length);
    cleaned = cleaned.trim(); // Trim again
    // console.log("Cleaned (after generic ``` strip):", cleaned);
    return cleaned;
  }

  // Regex attempts as fallback if direct string ops didn't catch it
  // (e.g. slight variations in whitespace or content)
  const markdownJsonPattern = /```json\s*([\s\S]*?)\s*```/;
  let match = cleaned.match(markdownJsonPattern);
  if (match && match[1]) {
    // console.log("Cleaned using regex ```json pattern");
    return match[1].trim();
  }

  const markdownGenericPattern = /```\s*([\s\S]*?)\s*```/;
  match = cleaned.match(markdownGenericPattern);
  if (match && match[1]) {
    // console.log("Cleaned using regex generic ``` pattern");
    return match[1].trim();
  }

  // console.log("No markdown fences fully matched, returning trimmed original:", cleaned);
  return cleaned; // Return the (potentially still problematic) string if no patterns matched
}

export async function getCareerSuggestions(skills, interests, experienceLevel) {
  if (!skills || skills.length === 0) {
    skills = ["general software development"];
  }
  if (!interests) {
    interests = "technology and problem solving";
  }
  if (!experienceLevel) {
    experienceLevel = "entry-level";
  }

  const prompt = `
    Suggest 3 distinct tech career pathways for someone with skills in [${skills.join(
      ", "
    )}],
    interested in [${interests}], and at an [${experienceLevel}] experience level.
    One pathway should be a more direct match, one slightly more adventurous, and one a niche or emerging field if possible.

    For each pathway, provide:
    - title: A concise career title.
    - description: A brief 1-2 sentence description of the role and why it fits.
    - compatibility: A string representing a percentage (e.g., "85%") indicating how well it matches the input.
    - skillsToLearn: An array of 3-5 key skills to acquire or strengthen for this path.
    - salaryRange: A typical estimated annual salary range for this role in USD (e.g., "$70,000 - $110,000").
    - resources: An array of 2-3 objects, each with a 'name' (e.g., "Coursera Course", "FreeCodeCamp Tutorial") and a 'url'.
                 Prioritize free or widely accessible resources.

    Format the entire response as a single JSON object with a top-level key "pathways"
    which is an array of these career pathway objects.

    Example of a single pathway object structure:
    {
      "title": "Example Developer",
      "description": "This role involves building exciting things and matches your interest in X.",
      "compatibility": "90%",
      "skillsToLearn": ["Advanced JavaScript", "Cloud Platform (AWS/Azure/GCP)", "API Design"],
      "salaryRange": "$80,000 - $120,000",
      "resources": [
        { "name": "MDN Web Docs", "url": "https://developer.mozilla.org/" },
        { "name": "Awesome List for X", "url": "https://github.com/sindresorhus/awesome" }
      ]
    }
  `;

  let rawText = ""; // To store raw text for debugging in case of error

  try {
    // IMPORTANT: Pass generationConfig and safetySettings directly to the generateContent call
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: generationConfigForRequest,
      safetySettings: safetySettingsForRequest,
    });

    const response = result.response;

    if (
      !response ||
      !response.candidates ||
      response.candidates.length === 0 ||
      !response.candidates[0].content ||
      !response.candidates[0].content.parts ||
      response.candidates[0].content.parts.length === 0
    ) {
      const feedback =
        response?.promptFeedback || result.response?.promptFeedback;
      if (feedback?.blockReason) {
        console.error(
          "AI generation blocked. Reason:",
          feedback.blockReason,
          "Message:",
          feedback.blockReasonMessage
        );
        throw new Error(
          `AI generation blocked. Reason: ${
            feedback.blockReasonMessage || feedback.blockReason
          }`
        );
      }
      console.error(
        "Gemini response is empty or has unexpected structure. Full response object:",
        JSON.stringify(result, null, 2)
      );
      throw new Error(
        "AI returned an empty or malformed response. Check logs for details."
      );
    }

    rawText = response.text(); // Get text from the first candidate's parts
    // console.log("Raw Gemini Response Text:", rawText);

    const cleanedText = cleanJsonString(rawText);
    // console.log("Cleaned Text for JSON parsing:", cleanedText);

    // Add more detailed logging right before parsing
    if (
      cleanedText.length < 2 ||
      (!cleanedText.startsWith("{") && !cleanedText.startsWith("["))
    ) {
      console.warn(
        "Cleaned text does not appear to be valid JSON. First 100 chars:",
        cleanedText.substring(0, 100)
      );
    }

    let parsedResponse;
    try {
      parsedResponse = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error(
        "Failed to parse cleaned JSON response. Parse error:",
        parseError.message
      );
      console.error("Raw text from AI was:", JSON.stringify(rawText)); // Log raw text
      console.error(
        "Cleaned text that failed parsing was:",
        JSON.stringify(cleanedText)
      ); // Log cleaned text
      // Log first N characters with their char codes for debugging weird characters
      let charCodeDebug = "";
      for (let i = 0; i < Math.min(cleanedText.length, 30); i++) {
        charCodeDebug += `${cleanedText[i]}(${cleanedText.charCodeAt(i)}) `;
      }
      console.error(
        "First 30 chars of cleanedText (that failed parsing) with char codes:",
        charCodeDebug
      );

      throw new Error(
        `AI returned invalid JSON even after cleaning. Details: ${parseError.message}. Check console logs for raw and cleaned AI responses, and character codes.`
      );
    }

    if (!parsedResponse.pathways || !Array.isArray(parsedResponse.pathways)) {
      console.error(
        "Gemini response is not in the expected format (missing pathways array). Parsed:",
        parsedResponse,
        "Raw:",
        rawText
      );
      throw new Error("AI response format error. Expected 'pathways' array.");
    }

    parsedResponse.pathways.forEach((path, index) => {
      if (
        !path.title ||
        !path.description ||
        !path.compatibility ||
        !path.skillsToLearn ||
        !path.salaryRange ||
        !path.resources
      ) {
        console.error(
          `Malformed pathway object at index ${index}:`,
          path,
          "Full parsed response:",
          parsedResponse,
          "Raw response:",
          rawText
        );
        throw new Error(
          `AI response format error. Malformed pathway object at index ${index}. Check console for details.`
        );
      }
      if (!Array.isArray(path.skillsToLearn)) {
        console.warn(
          `Pathway object at index ${index} 'skillsToLearn' is not an array:`,
          path
        );
        path.skillsToLearn = [];
      }
      if (!Array.isArray(path.resources)) {
        console.warn(
          `Pathway object at index ${index} 'resources' is not an array:`,
          path
        );
        path.resources = [];
      }
    });

    return parsedResponse;
  } catch (error) {
    console.error("Error in getCareerSuggestions:", error.message);
    // Log additional details if available from the error object
    if (error.response && error.response.promptFeedback) {
      console.error("Prompt Feedback:", error.response.promptFeedback);
    }
    // Avoid re-throwing generic SyntaxError if we've already thrown our custom detailed error
    if (
      error.message.includes("AI returned invalid JSON") ||
      error.message.includes("AI generation blocked") ||
      error.message.includes("AI response format error")
    ) {
      throw error; // Re-throw our custom, more informative error
    }
    throw new Error(
      "Failed to get suggestions from AI. Original error: " + error.message
    );
  }
}
