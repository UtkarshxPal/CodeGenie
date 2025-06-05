import { Link } from "react-router-dom";
import {
  Sparkles,
  Zap,
  Eye,
  Code,
  Download,
  ArrowRight,
  Clock,
  Monitor,
  Wand2,
} from "lucide-react";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col relative overflow-hidden">
      <Navbar></Navbar>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 py-16">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-cyan-500" />
            <span className="text-gray-700 font-medium">
              AI-Powered Landing Page Generator
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight">
            Rapid Landing Page
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              MVPs in Seconds
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your ideas into stunning, production-ready landing pages
            with our AI chatbot. Generate well-structured HTML & CSS code with
            live preview — no coding required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/chat"
              className="group flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
            >
              <Zap className="w-6 h-6" />
              Start Creating Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* <button className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 text-lg">
              <Eye className="w-6 h-6" />
              Watch Demo
            </button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-gray-400">Pages Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                &lt;30s
              </div>
              <div className="text-gray-400">Average Creation Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                99%
              </div>
              <div className="text-gray-400">User Satisfaction</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Why Choose CodeGenie?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of web development with our AI-powered
              platform
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Instant MVPs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Generate production-ready HTML & CSS for landing pages in
                seconds. No more waiting weeks for development cycles.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Live Preview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See your landing page come to life in real-time with instant
                preview. What you see is exactly what you get.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wand2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                No Coding Required
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Simply describe your vision and let our AI handle the complex
                coding. Focus on your ideas, not implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Describe Your Vision
              </h3>
              <p className="text-gray-600">
                Tell our AI chatbot what kind of landing page you want to create
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                AI Generates Code
              </h3>
              <p className="text-gray-600">
                Watch as our AI creates beautiful, responsive HTML & CSS code
                instantly
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Download & Deploy
              </h3>
              <p className="text-gray-600">
                Preview your page and download the complete HTML file ready for
                deployment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <footer className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Ready to Build Your MVP?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are building faster with AI. Start
              creating your landing page in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/chat"
                className="group flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 text-lg"
              >
                <Sparkles className="w-6 h-6" />
                Try CodeGenie Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>✨ Free to use</span>
                <span>•</span>
                <span>🚀 No signup required</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
