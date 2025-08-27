import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, User, Award, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-[#2d3748] transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <User className="w-12 h-12 text-black dark:text-white transition-colors duration-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-black dark:text-white transition-colors duration-300">
            About <span className="text-black dark:text-white">Me</span>
          </h2>
          <p className="text-lg text-black dark:text-[#d1d5db] max-w-2xl mx-auto transition-colors duration-300">
            Passionate developer with a strong foundation in computer science and real-world experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white dark:bg-[#3e4759] border-2 border-black dark:border-white hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#1a202c] rounded-lg transition-colors duration-300">
                  <GraduationCap className="w-6 h-6 text-black dark:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white transition-colors duration-300">
                  Current Education
                </h3>
              </div>
              <h4 className="font-bold text-lg mb-2 text-black dark:text-white transition-colors duration-300">
                MS Computer and Information Sciences
              </h4>
              <p className="text-black dark:text-[#d1d5db] mb-2 font-medium transition-colors duration-300">
                State University of New York at Buffalo
              </p>
              <div className="flex items-center gap-2 text-sm text-black dark:text-[#d1d5db] transition-colors duration-300">
                <span>Aug 2024 - Dec 2025</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-black dark:text-white transition-colors duration-300" />
                  <span className="font-semibold text-black dark:text-white">GPA: 3.75/4</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#3e4759] border-2 border-black dark:border-white hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#1a202c] rounded-lg transition-colors duration-300">
                  <GraduationCap className="w-6 h-6 text-black dark:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white transition-colors duration-300">
                  Bachelor's Degree
                </h3>
              </div>
              <h4 className="font-bold text-lg mb-2 text-black dark:text-white transition-colors duration-300">
                BTech Electronics and Computer Engineering
              </h4>
              <p className="text-black dark:text-[#d1d5db] mb-2 font-medium transition-colors duration-300">
                Vellore Institute of Technology, India
              </p>
              <div className="flex items-center gap-2 text-sm text-black dark:text-[#d1d5db] transition-colors duration-300">
                <span>Jun 2017 - Apr 2021</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-black dark:text-white transition-colors duration-300" />
                  <span className="font-semibold text-black dark:text-white">GPA: 8.67/10</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white dark:bg-[#3e4759] border-2 border-black dark:border-white hover:border-black dark:hover:border-white transition-all duration-300 shadow-lg">
          <CardContent className="p-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 bg-gray-100 dark:bg-[#1a202c] rounded-lg transition-colors duration-300">
                <Target className="w-8 h-8 text-black dark:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-center text-black dark:text-white transition-colors duration-300">
                Professional Summary
              </h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-black dark:text-[#d1d5db] leading-relaxed text-center text-lg mb-6 transition-colors duration-300">
                Graduate student and Full Stack Developer with{" "}
                <span className="font-semibold text-black dark:text-white">2.5+ years of experience</span> specializing
                in scalable, low-latency web applications and modern frontend architecture.
              </p>
              <p className="text-black dark:text-[#d1d5db] leading-relaxed text-center transition-colors duration-300">
                Proven expertise in{" "}
                <span className="font-semibold text-black dark:text-white">TypeScript, React, Angular</span>, and
                cloud-based CI/CD pipelines. Demonstrated ability to deliver optimized, accessible user interfaces and
                integrate machine learning models for predictive analytics. Strong problem solver and collaborative
                Agile team member with a track record of{" "}
                <span className="font-semibold text-black dark:text-white">mentoring peers</span> and driving technical
                excellence.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
