import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Zap, BrainCircuit, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Helix AI Finance Console",
    description:
      "A full-stack financial intelligence platform using Agentic AI to automate expense tracking, categorization, and anomaly detection.",
    achievements: [
      "Architected a microservices system with Next.js, Express, and FastAPI",
      "Implemented LLM-powered auto-categorization and fraud/anomaly detection",
      "Built interactive financial dashboards with real-time analytics",
    ],
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI", "Agentic AI"],
    icon: <BrainCircuit className="w-6 h-6" />,
    liveLink: "https://helix-ai-finance-console.vercel.app/",
    sourceLink: "https://github.com/rawat20/helix-ai-finance-console",
    hasLinks: true,
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
    liveLink: "https://stockpredictionapp-itbnjcrzne7fp8uvouddwh.streamlit.app/",
    sourceLink: "https://github.com/rawat20/stock_prediction_app",
    hasLinks: true,
  },
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
    sourceLink: "https://github.com/rawat20/optium-erp",
    hasLinks: false,
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
    sourceLink: "https://github.com/rawat20/realreco-system",
    hasLinks: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-[#2d3748] transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance text-black dark:text-white transition-colors duration-300">
          Featured <span className="text-black dark:text-white">Projects</span>
        </h2>

        <style>{`
          .scrollbar-visible::-webkit-scrollbar {
            height: 8px;
          }
          .scrollbar-visible::-webkit-scrollbar-track {
            background: #f1f1f1;
            dark:background: #1a202c;
            border-radius: 10px;
          }
          .scrollbar-visible::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }
          .scrollbar-visible::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}</style>

        <div className="overflow-x-auto pb-4 scrollbar-visible">
          <div className="flex gap-8 min-w-max px-4">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white dark:bg-[#3e4759] border-2 border-black dark:border-white hover:shadow-lg transform hover:-translate-y-1 group h-full w-80 flex-shrink-0 transition-all duration-300 flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-[#1a202c] rounded-lg transition-colors duration-300">
                        <div className="text-black dark:text-white transition-colors duration-300">{project.icon}</div>
                      </div>
                      <CardTitle className="text-xl text-black dark:text-white transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col">
                  <p className="text-black dark:text-[#d1d5db] leading-relaxed transition-colors duration-300 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex-grow">
                    <h4 className="font-semibold mb-2 text-sm text-black dark:text-white transition-colors duration-300">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0 transition-colors duration-300" />
                          <p className="text-sm text-black dark:text-[#d1d5db] transition-colors duration-300 line-clamp-2">
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

                  {project.hasLinks && (
                    <div className="flex gap-3 pt-4 border-t border-black dark:border-white flex-shrink-0">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded hover:opacity-80 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                      <a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded hover:opacity-80 transition-opacity duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Source Code</span>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}