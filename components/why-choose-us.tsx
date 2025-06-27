import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, TrendingUp, Globe } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Expert Trainers",
    description: "Learn from certified professionals with years of industry experience and proven track records.",
  },
  {
    icon: Target,
    title: "Customized Solutions",
    description: "Tailored training programs designed to meet your specific needs and organizational goals.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Over 95% of our participants report significant improvement in their professional capabilities.",
  },
  {
    icon: Globe,
    title: "Local & Global Impact",
    description: "Combining international best practices with local insights for maximum relevance and impact.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-terracotta-50 to-forest-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Goodlife Consulting Partners?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terracotta-500 to-forest-500 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering exceptional training experiences that create lasting impact on your personal
            and professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="group text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-terracotta-500 to-forest-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-terracotta-600 mb-2">500+</div>
            <div className="text-gray-600">Professionals Trained</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-forest-600 mb-2">95%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-terracotta-600 mb-2">50+</div>
            <div className="text-gray-600">Training Programs</div>
          </div>
        </div>
      </div>
    </section>
  )
}
