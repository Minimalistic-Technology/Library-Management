// new theme 
import { Star, Heart, BookOpen, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// BookCardProps → defines the data the card expects.
interface BookCardProps {
  title: string;
  author: string;
  genre: string;
  rating: number;
  image: string;
  price: string;
  description: string;
  onBookClick: (book: BookCardProps) => void; // Add click handler prop
}

// Defines the BookCard component, destructuring the props.
export default function BookCard({
  title,
  author,
  genre,
  rating,
  image,
  price,
  description,
  onBookClick,
}: BookCardProps) {
  // isFavorite: tracks whether the book is saved.
  const [isFavorite, setIsFavorite] = useState(false);
  // isHovered: used for animations like star delay.
  const [isHovered, setIsHovered] = useState(false);

  /* 
    React runs the code inside this effect:

    right after the component appears on the screen

    and every time the book's title changes.
    So this effect is basically: "Whenever the title changes, check if that title is in favorites."




    favorites.some((fav: any) => fav.title === title)

    .some checks if at least one item in the array matches the condition.

    Condition here: fav.title === title
    → Does the saved favorite's title equal this card's title?

    If yes → returns true.

    If no → returns false.

*/
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav: any) => fav.title === title));
  }, [title]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking heart
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const book = { title, author, genre, rating, image, price, description };

    /* 
    If the book is already a favorite:
         favorites.filter(...) → removes this book from the list.

          E.g., if favorites had ["1984", "The Hobbit"] and this card is "The Hobbit", after filter → ["1984"].

          Save that new list back into localStorage.

          Update React state (setIsFavorite(false) → makes the heart unfilled).

          Tell the rest of the app something changed:

          window.dispatchEvent(new Event("favoritesUpdated"));


          → That event can be listened to by other components (like a "Favorites" page) so they refresh automatically.
    
    */
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

  // Handle card click to open modal
  const handleCardClick = () => {
    onBookClick({ title, author, genre, rating, image, price, description, onBookClick });
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
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-1 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}
        style={{ backgroundColor: "#FFD93D40" }}
      ></div>

      {/* Main card */}
      <div
        className="relative backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105"
        style={{
          //  backgroundColor: '#F6F1E9E6',
          backgroundColor: "#FFFFFFE6",
          borderColor: "#FFD93D40",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#FFD93D")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#FFD93D40")}
      >
        {/* Image section with overlay */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Top actions - only show on hover */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button
              onClick={toggleFavorite}
              className="p-2 backdrop-blur-sm rounded-xl border transition-all hover:scale-110"
              style={{
                backgroundColor: "#F6F1E980",
                borderColor: "#FFD93D40",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFD93D40";
                e.currentTarget.style.borderColor = "#FFD93D";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#F6F1E980";
                e.currentTarget.style.borderColor = "#FFD93D40";
              }}
            >
              <Heart
                className={`h-4 w-4 transition-all ${
                  isFavorite ? "fill-current scale-110" : "hover:fill-current"
                }`}
                style={{
                  color: isFavorite ? "#FFD93D" : "#4F200D80",
                }}
              />
            </button>
          </div>

          {/* Genre badge - only show on hover */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getGenreColor(
                genre
              )} shadow-lg`}
              style={{ color: "white" }}
            >
              {genre}
            </span>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 space-y-4">
          <div>
            <h3
              className="text-xl font-bold mb-2 line-clamp-2 transition-all duration-300"
              style={{ color: "#4F200D" }}
            >
              {title}
            </h3>

            <p className="text-sm font-medium" style={{ color: "#4F200D80" }}>
              by {author}
            </p>
          </div>

          {/* Star rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 transition-all duration-200 ${
                  i < Math.floor(rating) ? "fill-current" : ""
                }`}
                style={{
                  color: i < Math.floor(rating) ? "#FFD93D" : "#4F200D40",
                  animationDelay: isHovered ? `${i * 100}ms` : "0ms",
                }}
              />
            ))}
          </div>

          {/* Price and action */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold" style={{ color: "#4F200D" }}>
                {price}
              </span>
            </div>

            <button
              className="group/btn relative px-6 py-3 font-medium rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "#FFD93D",
                color: "#4F200D",
                boxShadow: "0 10px 25px -5px #FFD93D40",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 40px -10px #FFD93D60";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 25px -5px #FFD93D40";
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click when clicking button
              }}
            >
              <div
                className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"
                style={{ backgroundColor: "#4F200D20" }}
              ></div>
              <div className="relative flex items-center gap-2">
                {/* <Zap className="h-4 w-4 transition-transform group-hover/btn:rotate-12" /> */}
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













/*  FLOW OF THE TOGGLE FAVORITE  +  EXAMPLE

      Click heart → toggleFavorite runs.

      It grabs your saved favorites list from localStorage.

      If the book is already in favorites → remove it.

      If it's not in favorites → add it.

      Update localStorage so it "remembers" the change.

      Update React state so the heart immediately changes.

      Fire a custom "favoritesUpdated" event so other parts of your app know about the change.

EXAMPLE : 

    Suppose favorites = [ "1984", "Harry Potter" ]

    You click heart on "The Hobbit"

    Not favorite yet → add it → favorites now [ "1984", "Harry Potter", "The Hobbit" ]

    Heart turns red.

    Click again on "The Hobbit"

    Already favorite → remove it → favorites back to [ "1984", "Harry Potter" ]

    Heart turns white.
*/