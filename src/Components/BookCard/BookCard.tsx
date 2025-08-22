// // done
// import { Star, Heart } from "lucide-react";
// import { useState, useEffect } from "react";


// // Defines a TypeScript interface BookCardProps specifying the props for the component.
// interface BookCardProps {
//   title: string;
//   author: string;
//   genre: string;
//   rating: number;
//   image: string;
//   price: string;
// }

// // Defines the BookCard component, destructuring its props
// export default function BookCard({
//   title,
//   author,
//   genre,
//   rating,
//   image,
//   price,
// }: BookCardProps) {
//   // Creates an isFavorite state to track whether the book is a favorite, initialized to false
//   const [isFavorite, setIsFavorite] = useState(false);

//   /* Uses useEffect to check if the book is in favorites when the component mounts or when title changes.

//   Retrieves the "favorites" array from localStorage.

//   Sets isFavorite to true if a book with the same title exists in favorites */
//   useEffect(() => {
//     const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
//     setIsFavorite(favorites.some((fav: any) => fav.title === title));
//   }, [title]);

//   /* 
//        Defines a toggleFavorite function to handle adding/removing the book from favorites.

//         Retrieves the current favorites array from localStorage.

//         Creates a book object with all props for storage.
  
//   */
//   const toggleFavorite = () => {
//     const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
//     const book = { title, author, genre, rating, image, price };

//     /* If the book is already a favorite (isFavorite is true):

//       Filters out the book from favorites based on title.

//       Updates localStorage with the new array.
//       Sets isFavorite to false.

//       Dispatches the "favoritesUpdated" event to notify other components
//  */
//     if (isFavorite) {
//       // Remove from favorites
//       const updatedFavorites = favorites.filter(
//         (fav: any) => fav.title !== title
//       );
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//       setIsFavorite(false);
//       window.dispatchEvent(new Event("favoritesUpdated"));
//     } else {
//     /* 
//         If the book is not a favorite:

//         Adds the book object to the favorites array.

//         Updates localStorage with the new array.

//         Sets isFavorite to true.
        
//         Dispatches the "favoritesUpdated" event.
    
//     */
//       // Add to favorites
//       const updatedFavorites = [...favorites, book];
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//       setIsFavorite(true);
//       window.dispatchEvent(new Event("favoritesUpdated"));
//     }
//   };

//   return (
//     <div className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200 rounded-lg overflow-hidden">
//       <div className="relative overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute top-3 right-3">
//           <button
//             onClick={toggleFavorite}
//             className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-lg transition-all hover:scale-110"
//           >
//             <Heart
//               className={`h-4 w-4 transition-colors ${
//                 isFavorite
//                   ? "text-red-500 fill-red-500"
//                   : "text-gray-600 hover:text-red-500"
//               }`}
//             />
//           </button>
//         </div>
//       </div>

//       <div className="p-6">
//         <div className="mb-2">
//           <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
//             {genre}
//           </span>
//         </div>

//         <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
//           {title}
//         </h3>

//         <p className="text-gray-600 mb-3 text-sm">by {author}</p>

//         <div className="flex items-center mb-4">
//           <div className="flex items-center">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={`h-4 w-4 ${
//                   i < Math.floor(rating)
//                     ? "text-yellow-400 fill-current"
//                     : "text-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//           <span className="ml-2 text-sm text-gray-600">({rating})</span>
//         </div>

//         <div className="flex items-center justify-between">
//           <span className="text-2xl font-bold text-gray-900">{price}</span>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//             Read
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }























































// 
'use client'
import { Star, Heart, BookOpen, Zap } from "lucide-react";
import { useState, useEffect } from "react";

interface BookCardProps {
  title: string;
  author: string;
  genre: string;
  rating: number;
  image: string;
  price: string;
}

export default function BookCard({
  title,
  author,
  genre,
  rating,
  image,
  price,
}: BookCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav: any) => fav.title === title));
  }, [title]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const book = { title, author, genre, rating, image, price };

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav: any) => fav.title !== title
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      window.dispatchEvent(new Event("favoritesUpdated"));
    } else {
      const updatedFavorites = [...favorites, book];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
      window.dispatchEvent(new Event("favoritesUpdated"));
    }
  };

  const getGenreColor = (genre: string) => {
    const colors = {
      Classic: "from-amber-400 to-orange-500",
      Fiction: "from-blue-400 to-cyan-500",
      Dystopian: "from-red-500 to-pink-600",
      Romance: "from-pink-400 to-rose-500",
      "Coming-of-age": "from-green-400 to-emerald-500",
      Adventure: "from-purple-500 to-violet-600",
    };
    return colors[genre as keyof typeof colors] || "from-gray-400 to-gray-500";
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${getGenreColor(
          genre
        )} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}
      ></div>

      {/* Main card */}
      <div className="relative bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-slate-800/80">
        {/* Image section with overlay */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

          {/* Top actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={toggleFavorite}
              className="p-2 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:bg-black/60 hover:scale-110"
            >
              <Heart
                className={`h-4 w-4 transition-all ${
                  isFavorite
                    ? "text-red-400 fill-red-400 scale-110"
                    : "text-white/70 hover:text-red-400"
                }`}
              />
            </button>

            {/* Quick preview button */}
            <button className="p-2 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:bg-black/60 hover:scale-110">
              <BookOpen className="h-4 w-4 text-white/70 hover:text-purple-400" />
            </button>
          </div>

          {/* Genre badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${getGenreColor(
                genre
              )} shadow-lg`}
            >
              {genre}
            </span>
          </div>

          {/* Rating overlay */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-xs font-medium">{rating}</span>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300">
              {title}
            </h3>

            <p className="text-slate-400 text-sm font-medium">by {author}</p>
          </div>

          {/* Star rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 transition-all duration-200 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-slate-600"
                }`}
                style={{
                  animationDelay: isHovered ? `${i * 100}ms` : "0ms",
                }}
              />
            ))}
            <span className="ml-2 text-sm text-slate-400">({rating}/5)</span>
          </div>

          {/* Price and action */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {price}
              </span>
            </div>

            <button className="group/btn relative px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-medium rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
              <div className="relative flex items-center gap-2">
                <Zap className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                <span>Read Now</span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom glow line */}
        <div
          className={`h-1 bg-gradient-to-r ${getGenreColor(
            genre
          )} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        ></div>
      </div>
    </div>
  );
}