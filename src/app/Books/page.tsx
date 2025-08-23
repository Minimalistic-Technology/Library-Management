"use client";
import React, { useState } from "react";

// Initial book data with working image URLs
const initialBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    rating: 4.5,
    price: 12.99,
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    rating: 4.8,
    price: 14.95,
    coverImage:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    rating: 4.7,
    price: 18.5,
    coverImage:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    rating: 4.6,
    price: 11.99,
    coverImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=600&fit=crop",
  },
  {
    id: 5,
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    category: "Psychology",
    rating: 4.9,
    price: 16.75,
    coverImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Fiction",
    rating: 4.2,
    price: 7.99,
    coverImage:
      "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=400&h=600&fit=crop",
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    rating: 3.9,
    price: 9.5,
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Psychology",
    rating: 4.5,
    price: 15.99,
    coverImage:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
  },
  {
    id: 9,
    title: "Educated",
    author: "Tara Westover",
    category: "Memoir",
    rating: 4.7,
    price: 13.25,
    coverImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=600&fit=crop",
  },
  {
    id: 10,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    rating: 4.8,
    price: 10.5,
    coverImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
  },
  {
    id: 11,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    rating: 4.7,
    price: 10.99,
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  },
  {
    id: 12,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    rating: 3.8,
    price: 9.25,
    coverImage:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop",
  },
];

// Additional books for the "Discover More Treasures" button
const additionalBooks = [
  {
    id: 13,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    rating: 4.9,
    price: 19.99,
    coverImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
  },
  {
    id: 14,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    category: "Fiction",
    rating: 4.2,
    price: 12.75,
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  },
  {
    id: 15,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "Fiction",
    rating: 4.3,
    price: 11.25,
    coverImage:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop",
  },
  {
    id: 16,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    category: "Mystery",
    rating: 3.8,
    price: 10.5,
    coverImage:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
  },
  {
    id: 17,
    title: "The Shining",
    author: "Stephen King",
    category: "Horror",
    rating: 4.2,
    price: 13.99,
    coverImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=600&fit=crop",
  },
];

// Available categories
const categories = [
  "All",
  "Fiction",
  "History",
  "Self-Help",
  "Psychology",
  "Memoir",
  "Fantasy",
  "Mystery",
  "Horror",
];

// Available ratings
const ratings = [
  { value: 0, label: "All Ratings" },
  { value: 4.5, label: "4.5+ Stars" },
  { value: 4.0, label: "4.0+ Stars" },
  { value: 3.5, label: "3.5+ Stars" },
];

// Sparkles icon component
const Sparkles = (props: { className: string | undefined }) => (
  <svg
    className={props.className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 2v4M3 4h4M2 5v4M4 3h4M19 2v4M17 4h4M16 5v4M18 3h4M5 16v4M3 18h4M2 19v4M4 17h4M19 16v4M17 18h4M16 19v4M18 17h4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 5l1.5 3.5L17 10l-3.5 1.5L12 15l-1.5-3.5L7 10l3.5-1.5L12 5z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// TrendingUp icon component
const TrendingUp = (props: { className: string | undefined }) => (
  <svg
    className={props.className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 15l-6-6-4 4-3-3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 15h4v-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function BookCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState(initialBooks);
  const [showingAll, setShowingAll] = useState(false);

  // Filter books based on category and rating
  const filteredBooks = books.filter((book) => {
    const categoryMatch =
      selectedCategory === "All" || book.category === selectedCategory;
    const ratingMatch = selectedRating === 0 || book.rating >= selectedRating;
    return categoryMatch && ratingMatch;
  });

  // Handle view all books
  const handleViewAllBooks = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      if (showingAll) {
        // If already showing all, reset to initial books
        setBooks(initialBooks);
        setShowingAll(false);
      } else {
        // Show all books (initial + additional)
        setBooks([...initialBooks, ...additionalBooks]);
        setShowingAll(true);
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="relative z-10 py-10 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Curated Collection</span>
            <TrendingUp className="w-4 h-4" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-teal-100 bg-clip-text text-transparent mb-6">
            Featured Literature
          </h2>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in carefully selected stories that have shaped
            minds and touched hearts across generations
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mt-8 rounded-full"></div>
        </div> */}

        {/* Category filter buttons */}
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-teal-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Rating filter buttons */}
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Filter by Rating
          </h2>
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {ratings.map((rating) => (
              <button
                key={rating.value}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center ${
                  selectedRating === rating.value
                    ? "bg-gradient-to-r from-purple-600 to-teal-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
                }`}
                onClick={() => setSelectedRating(rating.value)}
              >
                {rating.value > 0 && (
                  <span className="mr-1 text-yellow-400">
                    {"★".repeat(Math.floor(rating.value))}
                  </span>
                )}
                {rating.label}
              </button>
            ))}
          </div>
        </div>

        {/* Books display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div
                key={book.id}
                className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-white/20 animate-fade-in"
                style={{
                  animationDelay: `${(index % 8) * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 text-white">
                    {book.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">by {book.author}</p>
                  <span className="inline-block bg-purple-500/20 text-purple-200 text-xs px-2 py-1 rounded-full mb-2">
                    {book.category}
                  </span>
                  <div className="flex items-center mb-2">
                    <div className="text-yellow-400">
                      {"★".repeat(Math.floor(book.rating))}
                      {"☆".repeat(5 - Math.floor(book.rating))}
                    </div>
                    <span className="text-gray-300 text-sm ml-1">
                      ({book.rating})
                    </span>
                  </div>
                  <p className="text-teal-400 font-bold">
                    ${book.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-300">
                No books found for the selected filters.
              </p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button
            onClick={handleViewAllBooks}
            disabled={isLoading}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="relative flex items-center gap-3">
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Loading Amazing Books...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-180" />
                  <span>
                    {showingAll ? "Show Less Books" : "Discover More Treasures"}
                  </span>
                </>
              )}
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}