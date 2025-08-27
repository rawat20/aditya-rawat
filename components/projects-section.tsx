import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Zap } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Optium ERP System",
      description:
        "Architected and led frontend development for a cloud-integrated ERP platform automating finance, procurement, and supply chain management.",
      achievements: [
        "Enhanced UI/UX with real-time inventory and cash flow tracking dashboards",
        "Increased operational visibility by 45%",
        "Integrated with cloud platforms for scalable analytics",
      ],
      technologies: ["Angular", "TypeScript", "Cloud Integration", "Real-time Analytics"],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "RealReco – Dealer & Distributor Management System",
      description:
        "Developed an optimized dealer and distributor portal improving real-time sales visibility and streamlining order tracking, returns, and payment workflows.",
      achievements: [
        "Improved real-time sales visibility",
        "Streamlined order tracking and returns process",
        "Enhanced payment workflow automation",
      ],
      technologies: ["React", "RESTful APIs", "Real-time Data", "UI/UX Design"],
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Stock Trend Analysis using LLM and GRU Models",
      description:
        "Designed and deployed deep learning models using LSTM and GRU architectures to predict stock trends from live market data, integrating Large Language Models (LLMs) for sentiment analysis.",
      achievements: [
        "Achieved 15% increase in prediction accuracy compared to baseline models",
        "Integrated LLMs for sentiment analysis",
        "Built user-facing web app using Streamlit for real-time visualization",
      ],
      technologies: ["Python", "LSTM", "GRU", "LLM", "Streamlit", "Machine Learning"],
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-[#2d3748] transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance text-black dark:text-white transition-colors duration-300">
          Featured <span className="text-black dark:text-white">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-[#3e4759] border-2 border-black dark:border-white hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-100 dark:bg-[#1a202c] rounded-lg transition-colors duration-300">
                    <div className="text-black dark:text-white transition-colors duration-300">{project.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-black dark:text-white transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black dark:text-[#d1d5db] leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-2 text-sm text-black dark:text-white transition-colors duration-300">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0 transition-colors duration-300" />
                        <p className="text-sm text-black dark:text-[#d1d5db] transition-colors duration-300">
                          {achievement}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-gray-100 dark:bg-[#1a202c] px-2 py-1 rounded border border-black dark:border-white transition-all duration-300"
                    >
                      <span className="text-xs text-black dark:text-white transition-colors duration-300">{tech}</span>
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
