// app/components/PreviousSearches.js
import { ClockIcon } from "lucide-react";

export default function PreviousSearches({ searches, onLoadSearch }) {
  if (!searches || searches.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 p-3 md:p-7 bg-slate-800 rounded-lg shadow-md border border-slate-700">
      <h3 className="text-lg font-semibold text-sky-300 mb-3 flex items-center">
        <ClockIcon size={20} className="mr-2" /> Previous Searches
      </h3>
      <ul className="space-y-2">
        {searches.map((search, index) => (
          <li key={index}>
            <button
              onClick={() => onLoadSearch(search)}
              className="w-full text-left p-3 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors text-sm"
            >
              <p className="font-medium text-slate-200 truncate">
                Skills: {search.inputs.skills.join(", ") || "N/A"}
              </p>
              <p className="text-slate-400 truncate">
                Interests: {search.inputs.interests || "N/A"} | Level:{" "}
                {search.inputs.experienceLevel || "N/A"}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
