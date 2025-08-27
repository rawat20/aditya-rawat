"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)

    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark)

    setIsDark(shouldBeDark)
    updateTheme(shouldBeDark)

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches)
        updateTheme(e.matches)
      }
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange)
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange)
  }, [])

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement
    html.style.transition = "all 0.3s ease"

    if (dark) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    html.offsetHeight
  }

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newIsDark = event.target.checked
    setIsDark(newIsDark)
    updateTheme(newIsDark)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        <input type="checkbox" id="theme-toggle" className="sr-only" checked={isDark} onChange={handleSliderChange} />

        <label
          htmlFor="theme-toggle"
          className={`relative w-20 h-10 rounded-full cursor-pointer transition-all duration-300 flex items-center border-2 shadow-lg hover:shadow-xl transform hover:scale-105 ${
            isDark ? "bg-[#2d3748] border-white" : "bg-white border-black"
          }`}
        >
          {/* Sun icon on left */}
          <div className="absolute left-2 z-10">
            <Sun
              className={`h-4 w-4 transition-all duration-300 ${
                !isDark ? "text-black scale-110" : "text-white scale-90"
              }`}
            />
          </div>

          {/* Moon icon on right */}
          <div className="absolute right-2 z-10">
            <Moon
              className={`h-4 w-4 transition-all duration-300 ${
                isDark ? "text-white scale-110" : "text-black scale-90"
              }`}
            />
          </div>

          <div
            className={`absolute top-1 w-8 h-8 rounded-full transition-all duration-300 shadow-lg border-2 ${
              isDark ? "translate-x-10 bg-white border-black" : "translate-x-1 bg-black border-white"
            }`}
          />
        </label>
      </div>
    </div>
  )
}
