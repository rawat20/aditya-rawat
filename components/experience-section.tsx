import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Optium Data Solutions",
      period: "Oct 2022 - Aug 2023",
      achievements: [
        "Spearheaded frontend development of a scalable ERP system automating finance, HR, and manufacturing workflows, leveraging Angular and TypeScript to optimize real-time analytics integration with cloud platforms",
        "Mentored 5+ junior developers on best practices, code quality, and GitOps workflows, resulting in a 30% improvement in team productivity and maintainability",
        "Refactored legacy codebase, reducing size by 50% and enhancing scalability and responsiveness across browsers, aligning with WCAG accessibility standards",
        "Optimized UI/UX, improving page load times by 35% and enhancing cross-device accessibility compliance",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Real Variable",
      period: "May 2021 - Oct 2022",
      achievements: [
        "Developed supply chain management web applications serving 200+ distributors, utilizing reusable UI components and client-side rendering (CSR) to reduce load times by 40%",
        "Integrated real-time data visualization dashboards and RESTful APIs to enhance decision-making and reporting accuracy",
        "Collaborated closely with product, design, and backend teams in Agile sprints, contributing to CI/CD pipelines via Docker and Jenkins for seamless deployment automation",
        "Automated deployment workflows using shell scripting and containerization tools, reducing manual deployment efforts by 60%",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-[#2d3748] transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance text-black dark:text-white transition-colors duration-300">
          Work <span className="text-black dark:text-white">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-[#3e4759] border-2 border-black dark:border-white hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2 text-black dark:text-white transition-colors duration-300">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-black dark:text-[#d1d5db] transition-colors duration-300">
                      <Building className="w-4 h-4 text-black dark:text-white transition-colors duration-300" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-[#1a202c] px-3 py-1 rounded-lg border border-black dark:border-white transition-all duration-300 w-fit">
                    <div className="flex items-center gap-1 text-black dark:text-white transition-colors duration-300">
                      <Calendar className="w-3 h-3" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0 transition-colors duration-300" />
                      <p className="text-black dark:text-[#d1d5db] leading-relaxed transition-colors duration-300">
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
