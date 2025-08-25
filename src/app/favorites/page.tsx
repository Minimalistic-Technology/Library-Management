"use client"
import { Heart, ArrowLeft, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import BookCard from "../../Components/BookCard/BookCard";
import Navbar from "../../Components/Navbar/Navbar";
import { useRouter } from "next/navigation"; 

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      const savedFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );
      setFavorites(savedFavorites);
    };

    loadFavorites();

    window.addEventListener("favoritesUpdated", loadFavorites);

    return () => {
      window.removeEventListener("favoritesUpdated", loadFavorites);
    };
  }, []);

  const router = useRouter();
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#F6F1E9' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#FFD93D20' }}></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", backgroundColor: '#FFD93D15' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s", backgroundColor: '#FFD93D10' }}
        ></div>
      </div>

      <Navbar />

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border mb-6" 
                 style={{ backgroundColor: '#FFD93D20', borderColor: '#FFD93D40', color: '#4F200D' }}>
              <Heart className="w-4 h-4 fill-current" style={{ color: '#FFD93D' }} />
              <span className="text-sm font-medium">
                Your Personal Collection
              </span>
              <Sparkles className="w-4 h-4" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#4F200D' }}>
              My Favorites
            </h1>

            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#4F200D80' }}>
              {favorites.length === 0
                ? "Your favorite books collection is waiting to be filled with amazing stories"
                : `${favorites.length} carefully selected book${
                    favorites.length !== 1 ? "s" : ""
                  } in your personal library`}
            </p>

            <div className="w-24 h-1 mx-auto mt-8 rounded-full" style={{ backgroundColor: '#FFD93D' }}></div>
          </div>

          {favorites.length === 0 ? (
            <div className="text-center py-20">
              <div className="relative mb-8">
                <div className="w-32 h-32 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm border"
                     style={{ backgroundColor: '#FFD93D20', borderColor: '#FFD93D30' }}>
                  <Heart className="h-16 w-16" style={{ color: '#4F200D60' }} />
                </div>
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto blur-xl opacity-20" 
                     style={{ backgroundColor: '#FFD93D' }}></div>
              </div>

              <h2 className="text-3xl font-bold mb-6" style={{ color: '#4F200D' }}>
                No Favorites Yet
              </h2>

              <p className="text-lg mb-8 max-w-md mx-auto leading-relaxed" style={{ color: '#4F200D80' }}>
                Start building your personal library by clicking the heart icon
                on any book that catches your eye.
              </p>

              <button className="group relative px-8 py-4 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      style={{ backgroundColor: '#FFD93D', boxShadow: '0 25px 50px -12px #FFD93D40' }}>
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                     style={{ backgroundColor: '#4F200D20' }}></div>
                <div className="relative flex items-center gap-3" style={{ color: '#4F200D' }}>
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  <span>Browse Books</span>
                </div>
              </button>
            </div>
          ) : (
            <>
              {/* Back to Browse Button */}
              <div className="mb-12">
                <button
                  className="group flex items-center gap-3 px-6 py-3 backdrop-blur-sm border font-medium rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#FFD93D20', 
                    borderColor: '#FFD93D40', 
                    color: '#4F200D' 
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#FFD93D30'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#FFD93D20'}
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  <span>Back to Browse</span>
                </button>
              </div>

              {/* Books Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {favorites.map((book: any, index: number) => (
                  <div
                    key={`${book.title}-${index}`}
                    className="animate-fade-in"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    <BookCard
                      title={book.title}
                      author={book.author}
                      genre={book.genre}
                      rating={book.rating}
                      image={book.image}
                      price={book.price}
                    />
                  </div>
                ))}
              </div>

              {/* Stats Section */}
              <div className="mt-20 text-center">
                <div className="inline-flex items-center gap-4 px-8 py-4 backdrop-blur-sm border rounded-2xl"
                     style={{ backgroundColor: '#FFD93D20', borderColor: '#FFD93D40' }}>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 fill-current" style={{ color: '#FFD93D' }} />
                    <span className="font-medium" style={{ color: '#4F200D' }}>
                      {favorites.length} Favorites
                    </span>
                  </div>
                  <div className="w-px h-6" style={{ backgroundColor: '#4F200D20' }}></div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" style={{ color: '#FFD93D' }} />
                    <span style={{ color: '#4F200D80' }}>Keep discovering</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}