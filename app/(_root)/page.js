"use client";

import Link from "next/link";
import Image from "next/image";
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

// Placeholder for AI-generated images.
const heroImageUrl = "/images/ai-hero-bg.png";
const problemImageUrl = "/images/ai-sav.jpg";

export default function LandingPage() {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Gradient or a low-res pattern */}
          <Image
            src={heroImageUrl}
            alt="AI network"
            layout="fill"
            quality={80}
            className="opacity-90 object-cover"
            priority // Load this image first
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-900"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            variants={fadeIn()}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
          >
            <span className="block mb-4 md:mb-8">Lost in the Tech Maze?</span>
            <span className="block gradient-text text-transparent">
              Let AI Chart Your Perfect Career Path.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn(0.2)}
            initial="hidden"
            animate="visible"
            className="text-base md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10"
          >
            Stop guessing. Discover the best recommended tech path that aligns
            with your passion and purpose. Our intelligent platform analyzes
            your unique spark to illuminate your personalized tech career paths,
            guiding you from confusion to clarity.
          </motion.p>
          <motion.div variants={fadeIn(0.4)} initial="hidden" animate="visible">
            <Link
              href="/app"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg text-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Find Your Path
              <Zap size={24} className="ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem statement Section */}
      <section className="py-16 md:py-24 bg-slate-800/50 z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn()}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-300 mb-4">
              The Tech World is Vast But Your Path Shouldn&apos;t Be a Puzzle.
            </h2>
            <p className="text-slate-300 md:text-lg">
              Feeling overwhelmed by endless options and tech skills? Unsure
              which skills to learn or where your passions truly align in the
              ever-evolving tech landscape? You&apos;re not alone.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn(0.2)}
            className="max-w-2xl mx-auto mb-12"
          >
            {/* AI image here */}
            <Image
              src={problemImageUrl}
              alt="Confusing person at crossroads of tech choices"
              width={800}
              height={450}
              className="rounded-lg shadow-xl object-contain z-10"
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
                  "The AI analyzes your input against a vast database of tech roles and current trends.",
              },
              {
                icon: (
                  <MapPin size={48} className="text-green-400 mx-auto mb-4" />
                ),
                title: `3. Discover Your Pathways`,
                description:
                  "Receive personalized career suggestions, complete with skills to learn, salary insights, and learning resources.",
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
              Why TechOpath? Go Beyond Generic Advice.
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
                  "Leverage AI for suggestions that truly understand your potential and market demands.",
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
            It&apos;s free, insightful, and could be the first step towards a
            future you&apos;ll love.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn(0.4)}
          >
            <Link
              href="/app"
              className="inline-flex items-center justify-center px-10 py-5 bg-yellow-600 hover:bg-golden-logo text-slate-900 font-bold rounded-lg text-xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Discover Your Tech Path Now
              <ChevronRight size={28} className="hidden sm:block ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
