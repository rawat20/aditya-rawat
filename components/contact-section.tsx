import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-[#2d3748] transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance text-black dark:text-white transition-colors duration-300">
          Get In <span className="text-black dark:text-white">Touch</span>
        </h2>

        <Card className="bg-white dark:bg-[#3e4759] border-2 border-black dark:border-white hover:border-black dark:hover:border-white transition-all duration-300 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <p className="text-lg text-black dark:text-[#d1d5db] mb-6 transition-colors duration-300">
                I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can
                work together!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-[#1a202c] rounded-lg border border-black dark:border-white transition-all duration-300">
                <Mail className="w-5 h-5 text-black dark:text-white transition-colors duration-300" />
                <div>
                  <p className="font-medium text-black dark:text-white transition-colors duration-300">Email</p>
                  <a
                    href="mailto:rawat96636@gmail.com"
                    className="text-sm text-black dark:text-[#d1d5db] hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    rawat96636@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-[#1a202c] rounded-lg border border-black dark:border-white transition-all duration-300">
                <Phone className="w-5 h-5 text-black dark:text-white transition-colors duration-300" />
                <div>
                  <p className="font-medium text-black dark:text-white transition-colors duration-300">Phone</p>
                  <a
                    href="tel:+17165207701"
                    className="text-sm text-black dark:text-[#d1d5db] hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    +1 (716) 520-7701
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-[#1a202c] rounded-lg border border-black dark:border-white transition-all duration-300">
                <MapPin className="w-5 h-5 text-black dark:text-white transition-colors duration-300" />
                <div>
                  <p className="font-medium text-black dark:text-white transition-colors duration-300">Location</p>
                  <p className="text-sm text-black dark:text-[#d1d5db] transition-colors duration-300">New York, USA</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 border-2 border-black dark:border-white transition-all duration-300"
              >
                <a href="mailto:rawat96636@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <a href="tel:+17165207701" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Me
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/rawat20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black dark:text-[#d1d5db] hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/rawatji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black dark:text-[#d1d5db] hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
