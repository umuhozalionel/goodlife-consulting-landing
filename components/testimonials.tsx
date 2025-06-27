"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marie Uwimana",
    role: "Project Manager, Bank of Kigali",
    content:
      "The leadership training program transformed my management approach. I gained practical skills that I immediately applied in my role, resulting in improved team performance and project outcomes.",
    avatar: "MU",
  },
  {
    id: 2,
    name: "Jean Baptiste Nzeyimana",
    role: "IT Director, Rwanda Development Board",
    content:
      "Goodlife's digital literacy program was exactly what our team needed. The trainers were knowledgeable and the content was relevant to our daily challenges. Highly recommended!",
    avatar: "JN",
  },
  {
    id: 3,
    name: "Grace Mukamana",
    role: "Communications Specialist, UNICEF Rwanda",
    content:
      "The public speaking workshop boosted my confidence tremendously. I now present with clarity and impact. The personalized feedback and practical exercises made all the difference.",
    avatar: "GM",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Participants Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terracotta-500 to-forest-500 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what professionals who have completed our training programs have to
            say.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-terracotta-500 to-forest-500 rounded-full flex items-center justify-center">
                <Quote className="h-6 w-6 text-white" />
              </div>

              <div className="mb-8">
                <p className="text-xl text-gray-700 leading-relaxed italic mb-8">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-terracotta-500 to-forest-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="rounded-full border-terracotta-200 text-terracotta-600 hover:bg-terracotta-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-terracotta-600" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="rounded-full border-terracotta-200 text-terracotta-600 hover:bg-terracotta-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
