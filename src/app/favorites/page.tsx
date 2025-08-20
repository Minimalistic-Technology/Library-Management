// "use client";

// import { Heart } from "lucide-react";
// import { useState, useEffect } from "react";
// import BookCard from "../../Components/BookCard/BookCard";
// import Navbar from "../../Components/Navbar/Navbar";

// export default function FavoritesPage() {
//   const [favorites, setFavorites] = useState([]);

//   /* Defines a loadFavorites function that:

//     Retrieves the "favorites" item from localStorage.

//     Uses JSON.parse to convert the stored JSON string (or an empty array [] if none exists) into a JavaScript array.

//     Updates the favorites state with the retrieved data using setFavorites.
//  */
//   useEffect(() => {
//     const loadFavorites = () => {
//       const savedFavorites = JSON.parse(
//         localStorage.getItem("favorites") || "[]"
//       );
//       setFavorites(savedFavorites);
//     };

//     loadFavorites();

//     /*  
//         Adds an event listener for a custom "favoritesUpdated" event. When this event is triggered (e.g., when a book is added or removed from favorites), loadFavorites is called to refresh the favorites state.
//     */
//     window.addEventListener("favoritesUpdated", loadFavorites);

//     return () => {
//       window.removeEventListener("favoritesUpdated", loadFavorites);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       <div className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <div className="flex items-center justify-center space-x-3 mb-4">
//               <Heart className="h-8 w-8 text-red-500 fill-red-500" />
//               <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//                 My Favorites
//               </h1>
//             </div>
//             <p className="text-lg text-gray-600">
//               {favorites.length === 0
//                 ? "No favorites yet. Start adding books to your favorites!"
//                 : `${favorites.length} book${
//                     favorites.length !== 1 ? "s" : ""
//                   } in your favorites`}
//             </p>
//           </div>

//           {favorites.length === 0 ? (
//             <div className="text-center py-16">
//               <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 No Favorites Yet
//               </h2>
//               <p className="text-gray-600 text-lg mb-8">
//                 Start adding books to your favorites by clicking the heart icon
//                 on any book card.
//               </p>
//               <a
//                 href="/"
//                 className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
//               >
//                 Browse Books
//               </a>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {favorites.map((book: any, index: number) => (
//                 <BookCard
//                   key={`${book.title}-${index}`}
//                   title={book.title}
//                   author={book.author}
//                   genre={book.genre}
//                   rating={book.rating}
//                   image={book.image}
//                   price={book.price}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


























































// try
"use client"
import { Heart, ArrowLeft, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import BookCard from "../../Components/BookCard/BookCard";
import Navbar from "../../Components/Navbar/Navbar";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <Navbar />

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 mb-6">
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span className="text-sm font-medium">
                Your Personal Collection
              </span>
              <Sparkles className="w-4 h-4" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-teal-100 bg-clip-text text-transparent mb-6">
              My Favorites
            </h1>

            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {favorites.length === 0
                ? "Your favorite books collection is waiting to be filled with amazing stories"
                : `${favorites.length} carefully selected book${
                    favorites.length !== 1 ? "s" : ""
                  } in your personal library`}
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mt-8 rounded-full"></div>
          </div>

          {favorites.length === 0 ? (
            <div className="text-center py-20">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600/20 to-teal-600/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Heart className="h-16 w-16 text-slate-400" />
                </div>
                <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full mx-auto blur-xl opacity-20"></div>
              </div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
                No Favorites Yet
              </h2>

              <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                Start building your personal library by clicking the heart icon
                on any book that catches your eye.
              </p>

              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative flex items-center gap-3">
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  <span>Browse Books</span>
                </div>
              </button>
            </div>
          ) : (
            <>
              {/* Back to Browse Button */}
              <div className="mb-12">
                <button className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
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
                <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-400 fill-red-400" />
                    <span className="text-white font-medium">
                      {favorites.length} Favorites
                    </span>
                  </div>
                  <div className="w-px h-6 bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span className="text-slate-300">Keep discovering</span>
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