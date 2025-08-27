"use client"

import { motion } from "framer-motion"
import { User, Briefcase, Code, Lightbulb, Award, Mail } from "lucide-react"

interface ProfileTilesProps {
  onSelectSection: (section: string) => void
}

export function ProfileTiles({ onSelectSection }: ProfileTilesProps) {
  const profiles = [
    {
      id: "hero",
      title: "Aditya Rawat",
      subtitle: "Full Stack Developer",
      icon: User,
      color: "from-red-600 to-red-800",
      description: "Professional Summary & Introduction",
    },
    {
      id: "about",
      title: "Education",
      subtitle: "Academic Journey",
      icon: Award,
      color: "from-blue-600 to-blue-800",
      description: "MS Computer Science • BTech ECE",
    },
    {
      id: "experience",
      title: "Experience",
      subtitle: "2.5+ Years",
      icon: Briefcase,
      color: "from-green-600 to-green-800",
      description: "Senior Frontend Developer Journey",
    },
    {
      id: "projects",
      title: "Projects",
      subtitle: "Featured Work",
      icon: Code,
      color: "from-purple-600 to-purple-800",
      description: "ERP Systems • ML Models • Web Apps",
    },
    {
      id: "skills",
      title: "Skills",
      subtitle: "Technical Stack",
      icon: Lightbulb,
      color: "from-orange-600 to-orange-800",
      description: "React • Angular • TypeScript • Python",
    },
    {
      id: "contact",
      title: "Contact",
      subtitle: "Get In Touch",
      icon: Mail,
      color: "from-teal-600 to-teal-800",
      description: "New York, USA • Available for Opportunities",
    },
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Netflix-style header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Who's exploring today?</h1>
        <p className="text-gray-400 text-lg">Choose a section to dive into Aditya's professional journey</p>
      </div>

      {/* Profile tiles grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl w-full">
        {profiles.map((profile, index) => {
          const IconComponent = profile.icon
          return (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectSection(profile.id)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="mb-3">
                    <IconComponent className="w-8 h-8 md:w-12 md:h-12 text-white group-hover:text-red-400 transition-colors duration-300" />
                  </motion.div>

                  <h3 className="text-white font-bold text-sm md:text-lg mb-1 group-hover:text-red-400 transition-colors duration-300">
                    {profile.title}
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm mb-2">{profile.subtitle}</p>

                  <p className="text-gray-500 text-xs hidden md:block">{profile.description}</p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 rounded-lg transition-colors duration-300" />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm">Click on any tile to explore that section</p>
      </div>
    </div>
  )
}
