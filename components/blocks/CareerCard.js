// app/components/CareerCard.js
import { motion } from "framer-motion";
import {
  Briefcase,
  DollarSign,
  Zap,
  BookOpen,
  ExternalLinkIcon,
} from "lucide-react";

export default function CareerCard({ pathway, index }) {
  if (!pathway) return null;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1, // Stagger animation
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700 hover:border-sky-500 transition-colors duration-300"
    >
      <h3 className="text-2xl font-bold text-sky-400 mb-2 flex items-center">
        <Briefcase size={24} className="mr-2" /> {pathway.title}
      </h3>
      <p className="text-sm text-slate-400 mb-3">{pathway.description}</p>

      <div className="mb-3">
        <span className="text-sm font-semibold text-green-400 bg-green-900/50 px-3 py-1 rounded-full inline-flex items-center">
          <Zap size={16} className="mr-1" /> Compatibility:{" "}
          {pathway.compatibility}
        </span>
      </div>

      <div className="mb-3">
        <p className="text-sm font-semibold text-slate-300 mb-1 flex items-center">
          <DollarSign size={16} className="mr-1 text-yellow-400" /> Estimated
          Salary:
        </p>
        <p className="text-slate-200">{pathway.salaryRange}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-slate-300 mb-1 flex items-center">
          <BookOpen size={16} className="mr-1 text-purple-400" /> Skills to
          Learn:
        </p>
        <ul className="list-disc list-inside pl-1 text-slate-300 text-sm space-y-1">
          {pathway.skillsToLearn.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-300 mb-1">Resources:</p>
        <ul className="space-y-1">
          {pathway.resources.map((resource, i) => (
            <li key={i}>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 hover:underline text-sm flex items-center"
              >
                {resource.name} <ExternalLinkIcon size={14} className="ml-1" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
