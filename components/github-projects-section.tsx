"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"

interface GitHubProject {
  id: string
  title: string
  description: string
  image: string
  githubUrl: string
  liveUrl?: string
  technologies: string[]
  stars: number
  forks: number
}

// Sample projects data - replace with actual GitHub projects
const githubProjects: GitHubProject[] = [
  {
    id: "1",
    title: "Optium ERP System",
    description:
      "Cloud-integrated ERP platform automating finance, procurement, and supply chain management with real-time analytics.",
    image: "/erp-dashboard-interface.png",
    githubUrl: "https://github.com/rawat20/optium-erp",
    liveUrl: "https://optium-erp-demo.vercel.app",
    technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    stars: 45,
    forks: 12,
  },
  {
    id: "2",
    title: "RealReco Management System",
    description:
      "Dealer and distributor portal with real-time sales visibility and streamlined order tracking workflows.",
    image: "/sales-management-dashboard.png",
    githubUrl: "https://github.com/rawat20/realreco-system",
    technologies: ["React", "Redux", "Express.js", "MySQL"],
    stars: 32,
    forks: 8,
  },
  {
    id: "3",
    title: "Stock Trend Analysis AI",
    description: "Deep learning models using LSTM and GRU architectures with LLM integration for sentiment analysis.",
    image: "/stock-market-analysis-charts.png",
    githubUrl: "https://github.com/rawat20/stock-trend-ai",
    liveUrl: "https://stock-trend-ai.streamlit.app",
    technologies: ["Python", "TensorFlow", "Streamlit", "PyTorch"],
    stars: 78,
    forks: 23,
  },
]

export function GitHubProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            GitHub Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my open-source contributions and personal projects showcasing modern development practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {githubProjects.map((project) => (
            <Card
              key={project.id}
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border-border/50 bg-card/50 backdrop-blur-sm ${
                hoveredProject === project.id ? "scale-105 -translate-y-2" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/rawat20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
