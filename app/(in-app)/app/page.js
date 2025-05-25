"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, AlertTriangleIcon, BrainCircuit } from "lucide-react";
import SkillInput from "@/components/blocks/SkillInput";
import CareerCard from "@/components/blocks/CareerCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import PreviousSearches from "@/components/blocks/PreviousSearches";
import { getCareerSuggestions } from "@/lib/gemini";
import { loadSearches, saveSearch } from "@/utils/localStorage";

const experienceLevels = [
  "Entry-Level",
  "Junior",
  "Mid-Level",
  "Senior",
  "Lead/Principal",
];

export default function MainApp() {
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState("");
  const [experienceLevel, setExperienceLevel] = useState(experienceLevels[0]);

  const [suggestions, setSuggestions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [previousSearches, setPreviousSearches] = useState([]);

  // Form validation state
  const [formError, setFormError] = useState("");

  useEffect(() => {
    setPreviousSearches(loadSearches());
  }, []);

  const validateForm = () => {
    if (skills.length === 0 && !interests.trim()) {
      setFormError("Please enter at least one skill or some interests.");
      return false;
    }
    setFormError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);
    setSuggestions(null); // Clear previous suggestions

    try {
      const result = await getCareerSuggestions(
        skills,
        interests,
        experienceLevel
      );
      if (result && result.pathways) {
        setSuggestions(result.pathways);
        // Save this successful search
        const currentSearch = {
          inputs: { skills, interests, experienceLevel },
          outputs: result.pathways,
          timestamp: new Date().toISOString(),
        };
        saveSearch(currentSearch);
        setPreviousSearches(loadSearches()); // Refresh the list
      } else {
        throw new Error("Received unexpected data structure from AI.");
      }
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadSearch = (search) => {
    setSkills(search.inputs.skills || []);
    setInterests(search.inputs.interests || "");
    setExperienceLevel(search.inputs.experienceLevel || experienceLevels[0]);
    setSuggestions(search.outputs || null);
    setError(null); // Clear any existing errors
    setFormError(""); // Clear form errors
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <div className="min-h-screen container flex flex-col items-center mx-auto px-4 py-8 md:py-12">
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-400 mb-2">
          Tech Career Pathfinder{" "}
          {/* <Wand2 className="inline-block mb-2 ml-2 text-yellow-400" size={40} /> */}
          <BrainCircuit
            size={40}
            className="inline-block mb-2 ml-2 text-yellow-400"
          />
        </h1>
        <p className="text-lg text-slate-300">
          Discover your personalized tech career suggestions powered by AI.
        </p>
      </header>

      <div className="flex flex-col gap-5">
        <div className="w-3xl mx-auto bg-slate-800 p-10 md:p-8 rounded-xl shadow-2xl border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <SkillInput skills={skills} setSkills={setSkills} />

            <div>
              <label
                htmlFor="interests"
                className="block text-sm font-medium text-sky-300 mb-1"
              >
                Interests (e.g., AI, web development, data science, gaming)
              </label>
              <textarea
                id="interests"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                rows="3"
                placeholder="Describe your tech interests"
                className="w-full p-2 border border-slate-600 rounded-md bg-slate-700 text-slate-100 focus:ring-sky-500 focus:border-sky-500"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="experienceLevel"
                className="block text-sm font-medium text-sky-300 mb-1"
              >
                Current Experience Level
              </label>
              <select
                id="experienceLevel"
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="w-full p-2 border border-slate-600 rounded-md bg-slate-700 text-slate-100 focus:ring-sky-500 focus:border-sky-500"
              >
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {formError && (
              <p className="text-sm text-red-400 flex items-center">
                <AlertTriangleIcon size={16} className="mr-1" /> {formError}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-sky-800 disabled:text-sky-500 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 size={20} className="mr-2" /> Get Career Suggestions
                </>
              )}
            </button>
          </form>
        </div>

        {isLoading && <LoadingSpinner />}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-2xl mx-auto p-4 bg-red-900/30 border border-red-700 text-red-300 rounded-md text-center"
          >
            <p className="font-semibold flex items-center justify-center">
              <AlertTriangleIcon size={20} className="mr-2" /> Error:
            </p>
            <p>{error}</p>
          </motion.div>
        )}

        <AnimatePresence>
          {suggestions && suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-10 md:mt-12"
            >
              <h2 className="text-3xl font-bold text-center text-sky-300 mb-8">
                Your Personalized Career Pathways
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {suggestions.map((pathway, index) => (
                  <CareerCard
                    key={pathway.title + index}
                    pathway={pathway}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {previousSearches.length > 0 && (
          <PreviousSearches
            searches={previousSearches}
            onLoadSearch={handleLoadSearch}
          />
        )}
      </div>
    </div>
  );
}
