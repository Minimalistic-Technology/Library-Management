import {
  X,
  Star,
  Heart,
  BookOpen,
  Clock,
  Tag,
  User,
  DollarSign,
} from "lucide-react";
import { useState, useEffect } from "react";

// BookModalProps → defines the data the modal expects
interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    title: string;
    author: string;
    genre: string;
    rating: number;
    image: string;
    price: string;
    description: string;
  } | null;
}

export default function BookModal({ isOpen, onClose, book }: BookModalProps) {
  // isFavorite: tracks whether the book is saved in favorites
  const [isFavorite, setIsFavorite] = useState(false);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Check if book is in favorites when modal opens
  useEffect(() => {
    if (book) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.some((fav: any) => fav.title === book.title));
    }
  }, [book]);

  const toggleFavorite = () => {
    if (!book) return;

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav: any) => fav.title !== book.title
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

  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl overflow-x-hidden">
        {/* Glow effect */}
        <div
          className="absolute -inset-1 rounded-3xl blur-lg opacity-30"
          style={{ backgroundColor: "#FFD93D40" }}
        ></div>

        {/* Main modal content */}
        <div
          className="relative backdrop-blur-xl border rounded-3xl overflow-hidden"
          style={{
            backgroundColor: "#F6F1E9F0",
            borderColor: "#FFD93D60",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 backdrop-blur-sm rounded-xl border transition-all hover:scale-110"
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
            <X className="h-5 w-5" style={{ color: "#4F200D" }} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-96 md:h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Genre badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${getGenreColor(
                      book.genre
                    )} shadow-lg`}
                    style={{ color: "white" }}
                  >
                    <Tag className="inline w-3 h-3 mr-1" />
                    {book.genre}
                  </span>
                </div>

                {/* Favorite button */}
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={toggleFavorite}
                    className="p-3 backdrop-blur-sm rounded-xl border transition-all hover:scale-110"
                    style={{
                      backgroundColor: "#F6F1E990",
                      borderColor: "#FFD93D60",
                    }}
                  >
                    <Heart
                      className={`h-5 w-5 transition-all ${
                        isFavorite
                          ? "fill-current scale-110"
                          : "hover:fill-current"
                      }`}
                      style={{
                        color: isFavorite ? "#FFD93D" : "#4F200D80",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              {/* Title and Author */}
              <div>
                <h1
                  className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
                  style={{ color: "#4F200D" }}
                >
                  {book.title}
                </h1>
                <div
                  className="flex items-center gap-2 text-lg"
                  style={{ color: "#4F200D80" }}
                >
                  <User className="w-4 h-4" />
                  <span>by {book.author}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(book.rating) ? "fill-current" : ""
                      }`}
                      style={{
                        color:
                          i < Math.floor(book.rating) ? "#FFD93D" : "#4F200D40",
                      }}
                    />
                  ))}
                </div>
                <span
                  className="text-lg font-semibold"
                  style={{ color: "#4F200D" }}
                >
                  {book.rating}
                </span>
                <span className="text-sm" style={{ color: "#4F200D60" }}>
                  out of 5
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                {/* <DollarSign
                  className="w-5 h-5"
                  style={{ color: "#4F200D80" }}
                /> */}
                <span
                  className="text-3xl font-bold"
                  style={{ color: "#4F200D" }}
                >
                  {book.price}
                </span>
              </div>

              {/* Description */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen
                    className="w-5 h-5"
                    style={{ color: "#4F200D80" }}
                  />
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "#4F200D" }}
                  >
                    About this book
                  </h3>
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#4F200D80" }}
                >
                  {book.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  className="flex-1 px-6 py-4 font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: "#FFD93D",
                    color: "#4F200D",
                    boxShadow: "0 10px 25px -5px #FFD93D40",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px -10px #FFD93D60";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px -5px #FFD93D40";
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Read Now</span>
                  </div>
                </button>

                <button
                  className="px-6 py-4 font-semibold rounded-xl border-2 transition-all hover:scale-105"
                  style={{
                    backgroundColor: "transparent",
                    color: "#4F200D",
                    borderColor: "#FFD93D",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFD93D20";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  Preview
                </button>
              </div>

              {/* Additional info */}
              <div
                className="flex items-center gap-4 pt-4 text-sm"
                style={{ color: "#4F200D60" }}
              >
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>~6 hours read</span>
                </div>
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: "#4F200D40" }}
                ></div>
                <span>Digital & Physical available</span>
              </div>
            </div>
          </div>

          {/* Bottom glow line */}
          <div
            className={`h-1 bg-gradient-to-r ${getGenreColor(book.genre)}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
