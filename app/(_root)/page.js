// app/page.js (NEW Landing Page)
"use client";

import Link from "next/link";
import Image from "next/image"; // For optimized images
import {
  ChevronRight,
  Zap,
  BrainCircuit,
  Users,
  Lightbulb,
  Target,
  MapPin,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

// Placeholder for actual AI-generated images. Replace with your image paths.
const heroImageUrl = "/images/ai-hero-background.jpg"; // e.g., an abstract neural network or futuristic landscape
const problemImageUrl = "/images/ai-crossroads.jpg"; // e.g., stylized image of someone at a confusing intersection

export default function LandingPage() {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 min-h-[80vh] flex items-center">
        {/* Background Image (replace with <Image> if you have a local one) */}
        <div className="absolute inset-0 z-0">
          {/* Example placeholder: Gradient or a low-res pattern */}
          <Image
            src={heroImageUrl} // Replace with your actual AI-generated image
            alt="Abstract AI network"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="opacity-30" // Adjust opacity as needed
            priority // Load this image first
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            variants={fadeIn()}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
          >
            <span className="block">Lost in the Tech Maze?</span>
            <span className="block text-sky-400">
              Let AI Chart Your Perfect Career Course.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn(0.2)}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10"
          >
            Stop guessing. Start discovering. Our intelligent platform analyzes
            your unique spark to illuminate personalized tech career paths,
            guiding you from confusion to clarity.
          </motion.p>
          <motion.div variants={fadeIn(0.4)} initial="hidden" animate="visible">
            <Link
              href="/discover"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg text-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Find Your Tech Calling Now
              <Zap size={24} className="ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem/Agitation Section */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn()}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-300 mb-4">
              The Tech World is Vast. Your Path Shouldn't Be a Puzzle.
            </h2>
            <p className="text-slate-300 md:text-lg">
              Feeling overwhelmed by endless options? Unsure which skills to
              learn or where your passions truly align in the ever-evolving tech
              landscape? You're not alone.
            </p>
          </motion.div>
          {/* Optional: Add an AI image here like problemImageUrl */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn(0.2)}
            className="max-w-2xl mx-auto mb-12"
          >
            <Image
              src={problemImageUrl} // Replace with your image
              alt="Person at a confusing crossroads of tech choices"
              width={800}
              height={450}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn()}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-300 mb-3">
              Unlock Your Future in 3 Simple Steps
            </h2>
            <p className="text-slate-300 md:text-lg max-w-2xl mx-auto">
              Our AI-driven process makes finding your ideal tech career
              intuitive and insightful.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
            {[
              {
                icon: (
                  <Lightbulb
                    size={48}
                    className="text-yellow-400 mx-auto mb-4"
                  />
                ),
                title: "1. Share Your Spark",
                description:
                  "Tell us about your current skills, budding interests, and experience level. No tech jargon required!",
              },
              {
                icon: (
                  <BrainCircuit
                    size={48}
                    className="text-purple-400 mx-auto mb-4"
                  />
                ),
                title: "2. AI Works Its Magic",
                description:
                  "Our advanced Gemini AI analyzes your input against a vast database of tech roles and trends.",
              },
              {
                icon: (
                  <MapPin size={48} className="text-green-400 mx-auto mb-4" />
                ),
                title: "3. Discover Your Pathways",
                description:
                  "Receive 3 personalized career suggestions, complete with skills to learn, salary insights, and learning resources.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn(index * 0.2)}
                className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700 hover:border-sky-500 transition-all duration-300"
              >
                {step.icon}
                <h3 className="text-xl font-semibold text-sky-200 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn()}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-300 mb-3">
              Why Pathfinder? Go Beyond Generic Advice.
            </h2>
            <p className="text-slate-300 md:text-lg max-w-2xl mx-auto">
              We provide more than just job titles. We offer a launchpad for
              your tech ambitions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={32} className="text-red-400" />,
                title: "AI-Powered Precision",
                description:
                  "Leverage Google's Gemini AI for suggestions that truly understand your potential and market demands.",
              },
              {
                icon: <Users size={32} className="text-teal-400" />,
                title: "Deeply Personalized",
                description:
                  "Recommendations are tailored to YOUR unique combination of skills, interests, and experience – not a one-size-fits-all list.",
              },
              {
                icon: <BookOpen size={32} className="text-indigo-400" />,
                title: "Actionable Next Steps",
                description:
                  "Each pathway comes with curated resources and skills to learn, so you know exactly how to get started.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn(index * 0.15)}
                className="flex items-start space-x-4 p-4"
              >
                <div className="flex-shrink-0 mt-1 p-3 bg-slate-700 rounded-full">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sky-200 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 text-center bg-gradient-to-t from-slate-900 via-sky-900/30 to-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn()}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Stop Wondering and Start Building Your Tech Future?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn(0.2)}
            className="text-slate-300 md:text-lg max-w-xl mx-auto mb-10"
          >
            Your personalized tech career roadmap is just a few clicks away.
            It's free, insightful, and could be the first step towards a future
            you'll love.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn(0.4)}
          >
            <Link
              href="/discover"
              className="inline-flex items-center justify-center px-10 py-5 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold rounded-lg text-xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Get My AI Career Suggestions
              <ChevronRight size={28} className="ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Tech Career Pathfinder. All rights
            reserved.
          </p>
          <p>Powered by You & Google Gemini AI</p>
        </div>
      </footer>
    </div>
  );
}
