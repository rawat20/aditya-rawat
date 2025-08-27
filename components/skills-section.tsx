import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Wrench, Zap } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "TypeScript", "JavaScript (ES6+)", "SQL", "HTML5", "CSS", "C++"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Zap className="w-5 h-5" />,
      skills: [
        "React",
        "Angular",
        "Redux",
        "Next.js",
        "Node.js",
        "Express.js",
        "TensorFlow",
        "PyTorch",
        "Transformers",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Docker",
        "Jenkins",
        "CircleCI",
        "Kubernetes",
        "Postman",
        "REST APIs",
        "CI/CD",
      ],
    },
    {
      title: "Databases & Others",
      icon: <Database className="w-5 h-5" />,
      skills: [
        "MySQL",
        "MongoDB",
        "Machine Learning",
        "Distributed Systems",
        "Big Data Analytics",
        "Microservices",
        "UI/UX Design",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-[#2d3748] transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance text-black dark:text-white transition-colors duration-300">
          Technical <span className="text-black dark:text-white">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-[#3e4759] border-2 border-black dark:border-white hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gray-100 dark:bg-[#1a202c] rounded-lg transition-colors duration-300">
                    <div className="text-black dark:text-white transition-colors duration-300">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-100 dark:bg-[#1a202c] px-3 py-1 rounded border border-black dark:border-white hover:bg-gray-200 dark:hover:bg-[#2d3748] transition-all duration-300"
                    >
                      <span className="text-sm text-black dark:text-white transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
