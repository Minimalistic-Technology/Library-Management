
"use client";
import { Search, Menu, X, BookOpen, User, Heart, UserPlus } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
 
export default function Navbar() {
  /* Declares a state variable isMenuOpen (initially false) to track whether the mobile menu is open, with setIsMenuOpen to update it */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /* Declares a state variable favoritesCount (initially 0) to track the number of favorited books, with setFavoritesCount to update it */
  const [favoritesCount, setFavoritesCount] = useState(0);
  const router = useRouter();

  // Update favorites count
  /* Sets up a useEffect hook to run side effects when the component mounts or updates */
  useEffect(() => {
    const updateCount = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavoritesCount(favorites.length);
    };

    updateCount();

    /* "storage" listens for changes to localStorage across browser tabs.Explai 
            
      The storage event is a built-in browser event.

      It fires when localStorage changes in another tab or window of the same site.

      Example:

      You open your app in Tab A and Tab B.

      In Tab A, you add a book to favorites → localStorage changes.

      Tab B’s window.addEventListener("storage", ...) hears about it, so it runs updateCount() and updates the badge count.

      Without this, your navbar in Tab B would show stale data until you refreshed 

    */
    window.addEventListener("storage", updateCount);

    /* "favoritesUpdated" listens for a custom event triggered when favorites are updated in the same tab. explaination : 
    
    The storage event does not fire in the same tab where the change happened.

    That means if you click “Add to favorites” in Tab A, the navbar in Tab A wouldn’t notice right away.

    To fix this, you (or some other part of your app) trigger a custom event like:

    window.dispatchEvent(new Event("favoritesUpdated"));


    Since the navbar is listening with:

    window.addEventListener("favoritesUpdated", updateCount);


    it immediately runs updateCount() and refreshes the count in the same tab
    */
    window.addEventListener("favoritesUpdated", updateCount);

    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("favoritesUpdated", updateCount);
    };
  }, []);

  const handleUserClick = () => {
    // You can customize this to show a dropdown menu or navigate to profile
    router.push("/profile");
  };

  return (
    <nav className="relative z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between h-16">
          {/* Logo */}
          {/* In a flexbox container, items can shrink or grow depending on available space.

          By default, flex-shrink: 1 → items are allowed to shrink if needed.

          flex-shrink-0 → sets flex-shrink: 0 → this item will never shrink, even if the container is too small. */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-teal-600 rounded-xl">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent">
              Minimalistic Library
            </span>
          </div>

          {/* Search and Actions */}
          {/* Renders a container for desktop navigation, hidden on mobile (hidden md:flex) and aligned to the right (justify-end) */}
          {/* flex-1 : That breaks down into:

              flex-grow: 1 → the item can grow to fill available space.

              flex-shrink: 1 → the item can shrink if space is tight.

              flex-basis: 0% → start with zero width, then let flex-grow decide its size. */}
          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <a
                href="/Books"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Books
              </a>
              <a
                href="/About"
                className="text-slate-300 hover:text-white transition-colors"
              >
                About
              </a>
            </div>

            {/* max-w-lg → caps the maximum width at 32rem (~512px), so it doesn’t get too wide on big screens */}
            <div className="relative flex-1 max-w-lg mx-6">
              {/* 
              top-1/2 → vertically align it at 50% of parent’s height.

              transform -translate-y-1/2 → shift upward by 50% of its own height → perfect vertical centering.

             */}
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search books, authors, or genres..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2   backdrop-blur-sm"
              />
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Favorites Button with count */}
              <button
                className="relative p-2 text-slate-300 hover:text-red-400 transition-colors"
                onClick={() => {
                  router.push("favorites");
                }}
              >
                <Heart className="h-5 w-5" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </button>

              {/* User Icon Button */}
              <button
                onClick={handleUserClick}
                className="p-2 text-slate-300 hover:text-white transition-colors"
              >
                <User className="h-5 w-5" />
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
          /* border-white/10 → the border color is white at 10% opacity. */
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Books
              </a>
              <a
                href="/About"
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

                  {/* transition-colors : whenever a color-related property changes (like color, background-color, border-color, fill, stroke), don’t snap instantly—animate smoothly instead.*/}
                  <button
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                    onClick={handleUserClick}
                  >
                    <User className="h-5 w-5" />
                    <span>Profile</span>
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