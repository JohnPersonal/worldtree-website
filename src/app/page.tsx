import { motion } from 'framer-motion'

const services = [
  {
    title: "Information Security and Compliance Advisory",
    description: "Expert guidance on aligning your organization's security practices with industry standards.",
    icon: "🔒"
  },
  {
    title: "System Architecture Security Review",
    description: "We analyze your architecture to identify potential vulnerabilities in data flow and deployment.",
    icon: "🏛️"
  },
  {
    title: "AI/ML Threat Modeling",
    description: "Identify vulnerabilities and attack vectors unique to your machine learning workflows.",
    icon: "🤖"
  },
  {
    title: "Penetration Testing",
    description: "Uncover weaknesses in your system by simulating real-world attacks.",
    icon: "🎯"
  },
  {
    title: "Risk Assessment",
    description: "Evaluate vulnerabilities to prioritize mitigation efforts.",
    icon: "⚖️"
  },
  {
    title: "Reporting",
    description: "Detailed findings and actionable insights for your security posture.",
    icon: "📊"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section id="company" className="py-20 md:py-32 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            WORLDTREE SECURITY
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            We specialize in safeguarding AI and machine learning systems 
            with tailored security solutions.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="solutions" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-black/50 rounded-lg hover:bg-blue-900/20 transition-colors"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="team" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Contact Us</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-white">First Name</label>
                <input type="text" className="w-full p-2 bg-gray-900 rounded text-white" />
              </div>
              <div>
                <label className="block mb-2 text-white">Last Name</label>
                <input type="text" className="w-full p-2 bg-gray-900 rounded text-white" />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-white">Email</label>
              <input type="email" className="w-full p-2 bg-gray-900 rounded text-white" />
            </div>
            <div>
              <label className="block mb-2 text-white">Message</label>
              <textarea rows={4} className="w-full p-2 bg-gray-900 rounded text-white"></textarea>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded transition-colors text-white">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
