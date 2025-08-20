"use client";
import { Search, Menu, X, BookOpen, User, Heart, UserPlus } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);

  // Update favorites count
  useEffect(() => {
    const updateCount = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavoritesCount(favorites.length);
    };

    updateCount();

    // Listen for storage changes
    window.addEventListener("storage", updateCount);

    // Custom event for same-tab updates
    window.addEventListener("favoritesUpdated", updateCount);

    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("favoritesUpdated", updateCount);
    };
  }, []);

  return (
    <nav className="relative z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-teal-600 rounded-xl">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent">
              Minimalistic Library
            </span>
          </div>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            {/* Navigation Links */}
            <div className="flex items-center gap-6 mr-6">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                More
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                About
              </a>
            </div>

            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search books, authors, or genres..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Favorites Button with count */}
              <button className="relative p-2 text-slate-300 hover:text-red-400 transition-colors">
                <Heart className="h-5 w-5" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-slate-300 hover:text-white hover:bg-white/20 transition-all">
                <User className="h-4 w-4" />
                <span>Login</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded-xl hover:scale-105 transition-transform">
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                More
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                About
              </a>

              <div className="pt-4 border-t border-white/10">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search books..."
                    className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <button className="flex items-center gap-2 text-slate-300 hover:text-red-400 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span>Favorites ({favoritesCount})</span>
                  </button>

                  <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                    <User className="h-5 w-5" />
                    <span>Login</span>
                  </button>

                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded-xl hover:scale-105 transition-transform">
                    <UserPlus className="h-4 w-4" />
                    <span>Sign Up</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}