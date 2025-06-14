"use client";

import { useState } from "react";
import { XIcon, PlusCircleIcon } from "lucide-react";

export default function SkillInput({ skills, setSkills }) {
  const [currentSkill, setCurrentSkill] = useState("");

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (
      currentSkill.trim() &&
      !skills.includes(currentSkill.trim().toLowerCase())
    ) {
      setSkills([...skills, currentSkill.trim().toLowerCase()]);
      setCurrentSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentSkill.trim()) {
      handleAddSkill(e);
    }
  };

  return (
    <div className="">
      <label
        htmlFor="skill-input"
        className="block text-sm font-medium text-sky-300 mb-1"
      >
        Skills (e.g., Node.js, Python, Photoshop)
      </label>
      <div className="flex gap-2 mb-2">
        <input
          id="skill-input"
          type="text"
          value={currentSkill}
          onChange={(e) => setCurrentSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter or click Add button"
          className=" flex-1 w-24 p-2 border border-slate-600 rounded-md bg-slate-800 text-slate-100 focus:ring-sky-500 focus:border-sky-500"
        />
        <button
          type="button"
          onClick={handleAddSkill}
          className="md:w-24 md:text-lg font-semibold flex items-center p-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md"
          disabled={!currentSkill.trim()}
        >
          <PlusCircleIcon size={20} className="mr-1 md:mr-2" /> Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="flex items-center bg-sky-500 text-white text-sm font-medium px-3 py-1 rounded-full"
          >
            {skill}
            <button
              type="button"
              onClick={() => handleRemoveSkill(skill)}
              className="ml-2 text-sky-100 hover:text-white"
            >
              <XIcon size={16} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
