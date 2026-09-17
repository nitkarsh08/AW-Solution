import { motion } from "framer-motion";
import { Phone, ArrowRight, Globe, Smartphone, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-blue-950 to-black pt-20">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-full text-sm mb-6">
              🚀 AW Solution • Web & App Development
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
              Building
              <span className="text-blue-500"> Digital Solutions </span>
              That Grow Your Business
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
              We create premium websites, mobile apps, MERN stack solutions,
              e-commerce stores, and complete website management services for
              startups, businesses, and brands.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="tel:+919876543210">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg shadow-blue-600/30">
                  <Phone size={20} />
                  Free Consultation
                </button>
              </a>

              <a href="#portfolio">
                <button className="w-full sm:w-auto border border-white/20 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-semibold">
                  View Portfolio
                  <ArrowRight size={20} />
                </button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold text-blue-400">50+</h3>
                <p className="text-xs text-gray-400">Projects</p>
              </div>

              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold text-blue-400">24/7</h3>
                <p className="text-xs text-gray-400">Support</p>
              </div>

              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold text-blue-400">100%</h3>
                <p className="text-xs text-gray-400">Responsive</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Website Development
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Business, Portfolio & E-commerce
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Mobile App Development
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Android & Cross-platform Apps
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      MERN Stack Solutions
                    </h3>
                    <p className="text-gray-400 text-sm">
                      React • Node.js • MongoDB
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 text-center">
                <h3 className="text-2xl font-bold text-white">
                  Ready to Start?
                </h3>
                <p className="text-blue-100 mt-2">
                  Get a free consultation and discuss your project today.
                </p>

                <a href="tel:+917564051627">
                  <button className="mt-5 bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition">
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}