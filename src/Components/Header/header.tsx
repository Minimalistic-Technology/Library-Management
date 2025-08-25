"use client"
import { Sparkles, ArrowRight, Play } from "lucide-react";

export default function Header() {
  return (
    <header className="relative py-20 lg:py-32 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border mb-8"
            style={{
              backgroundColor: "#FFD93D20",
              borderColor: "#FFD93D40",
              color: "#4F200D",
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Discover Amazing Stories
            </span>
            <Sparkles className="w-4 h-4" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8">
            <span style={{ color: "#4F200D" }}>Welcome to</span>
            <br />
            <span style={{ color: "#FFD93D" }}>Minimalistic Library</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
            style={{ color: "#4F200D80" }}
          >
            Discover your next favorite book in our curated collection of
            literary masterpieces. From timeless classics to modern bestsellers,
            find your perfect read.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="group relative px-8 py-4 font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: "#FFD93D",
                color: "#4F200D",
                boxShadow: "0 25px 50px -12px #FFD93D40",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 25px 50px -12px #FFD93D60";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 25px 50px -12px #FFD93D40";
              }}
            >
              <div
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                style={{ backgroundColor: "#4F200D20" }}
              ></div>
              <div className="relative flex items-center gap-3">
                <span>Explore Books</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "#FFD93D" }}
              >
                10K+
              </div>
              <div style={{ color: "#4F200D80" }}>Books Available</div>
            </div>

            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "#FFD93D" }}
              >
                50K+
              </div>
              <div style={{ color: "#4F200D80" }}>Happy Readers</div>
            </div>

            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "#FFD93D" }}
              >
                4.9★
              </div>
              <div style={{ color: "#4F200D80" }}>User Rating</div>
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