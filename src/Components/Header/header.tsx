import { Sparkles, ArrowRight, Play } from "lucide-react";

export default function Header() {
  return (
    <header className="relative py-20 lg:py-32 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Discover Amazing Stories
            </span>
            <Sparkles className="w-4 h-4" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              Minimalistic Bookstore
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover your next favorite book in our curated collection of
            literary masterpieces. From timeless classics to modern bestsellers,
            find your perfect read.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="relative flex items-center gap-3">
                <span>Explore Books</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>           
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-slate-400">Books Available</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-slate-400">Happy Readers</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
                4.9★
              </div>
              <div className="text-slate-400">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      ></div> */}
    </header>
  );
}