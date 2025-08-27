"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#2d3748] transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#2d3748] dark:via-[#3e4759] dark:to-[#2d3748] transition-all duration-300" />

      {/* Geometric background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-black dark:border-white rotate-45 animate-spin-slow transition-all duration-300" />
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-black dark:border-white rotate-12 animate-bounce-slow transition-all duration-300" />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-black/20 dark:bg-white/20 rounded-full animate-pulse transition-all duration-300" />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-black/20 dark:bg-white/20 rounded-full animate-pulse delay-500 transition-all duration-300" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black dark:bg-white rounded-full animate-float transition-all duration-300" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-black dark:bg-white rounded-full animate-float delay-1000 transition-all duration-300" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-black dark:bg-white rounded-full animate-float delay-2000 transition-all duration-300" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Code className="w-16 h-16 text-black dark:text-white animate-pulse transition-all duration-300" />
              <Sparkles className="w-6 h-6 text-black dark:text-white absolute -top-2 -right-2 animate-spin-slow transition-all duration-300" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
            <span className="text-black dark:text-white transition-all duration-300">Aditya</span>{" "}
            <span className="text-black dark:text-white transition-all duration-300">Rawat</span>
          </h1>

          <div className="space-y-2 mb-6">
            <p className="text-xl md:text-3xl font-semibold text-black dark:text-white transition-all duration-300">
              Full Stack Developer
            </p>
            <p className="text-base md:text-lg text-black dark:text-white transition-all duration-300">
              New York, USA • 2.5+ Years Experience
            </p>
          </div>
        </div>

        <div className="mb-10">
          <p className="text-lg md:text-xl text-black dark:text-white mb-4 max-w-3xl mx-auto text-balance leading-relaxed transition-all duration-300">
            Crafting scalable, low-latency web applications with modern frontend architecture
          </p>
          <p className="text-base md:text-lg text-black dark:text-[#d1d5db] max-w-2xl mx-auto text-balance transition-all duration-300">
            Expertise in TypeScript, React, Angular, and cloud-based CI/CD pipelines
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 border-2 border-white dark:border-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a href="#projects" className="flex items-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a href="#contact" className="flex items-center gap-2">
              Get In Touch
              <Mail className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/rawat20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://linkedin.com/in/rawatji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href="mailto:rawat96636@gmail.com"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <Mail className="w-7 h-7" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
