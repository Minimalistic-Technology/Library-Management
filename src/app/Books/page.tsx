"use client";
import BookCard from "@/Components/BookCard/BookCard";
import RatingSlider from "@/Components/RatingSlider/page";
import BookModal from "@/Components/BookDetailModel/page";
import React, { useState, useEffect } from "react";
import { Filter, X, BookOpen, TrendingUp } from "lucide-react";
import Navbar from "@/Components/Navbar/Navbar";

// Define types for our data
interface Book {
  title: string;
  author: string;
  genre: string;
  category: string;
  image: string;
  rating: number;
  price: string;
  description: string;
}

// Sample book data with categories
const sampleBooks: Book[] = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Literature",
    category: "Fiction",
    rating: 4.2,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$12.99",
    description:
      "A classic American novel set in the Jazz Age, exploring themes of wealth, love, idealism, and moral decay in the American Dream.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Southern Gothic",
    category: "Fiction",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$14.99",
    description:
      "A gripping tale of racial injustice and childhood innocence in the American South, told through the eyes of young Scout Finch.",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    category: "Sci-Fi",
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$13.99",
    description:
      "A dystopian masterpiece about totalitarian control, surveillance, and the power of language in shaping reality and thought.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romantic Fiction",
    category: "Romance",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$11.99",
    description:
      "A witty and romantic novel about Elizabeth Bennet and Mr. Darcy, exploring themes of love, class, and social expectations.",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-age Fiction",
    category: "Fiction",
    rating: 3.9,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$10.99",
    description:
      "A controversial coming-of-age story following teenager Holden Caulfield as he navigates alienation and identity in New York City.",
  },
];

// Available categories
const categories = [
  "All",
  "Fiction",
  "History",
  "Self-Help",
  "Psychology",
  "Sci-Fi",
  "Romance",
  "Adventure",
  "Fantasy",
];

const BookPage: React.FC = () => {
  const [books] = useState<Book[]>(sampleBooks);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(sampleBooks);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedRating, setSelectedRating] = useState<number>(1.0);
  const [showFilters, setShowFilters] = useState<boolean>(true);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter books based on category and rating
  useEffect(() => {
    let result = books;

    // Apply category filter
    if (selectedCategory !== "All") {
      result = result.filter((book) => book.category === selectedCategory);
    }

    // Apply rating filter
    result = result.filter((book) => book.rating >= selectedRating);

    setFilteredBooks(result);
  }, [selectedCategory, selectedRating, books]);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Handle rating change
  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedRating(1.0);
  };

  // Handle book click to open modal
  const handleBookClick = (book: any) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const hasActiveFilters = selectedCategory !== "All" || selectedRating > 1.0;

  return (
    <div className="min-h-screen bg-[#F6F1E9]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-12 h-12 text-[#FFD93D]" />
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD93D] via-[#FFD93D] to-[#FFD93D] drop-shadow-sm">
              Book Catalog
            </h1>
          </div>
          <p className="text-[#4F200D]/80 text-lg max-w-2xl mx-auto">
            Discover your next favorite read from our curated collection of
            amazing books
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-[#4F200D]/70">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>{books.length} Books Available</span>
            </div>
            <div className="w-1 h-1 bg-[#FFD93D] rounded-full"></div>
            <span>{filteredBooks.length} Currently Shown</span>
          </div>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-[#4F200D]/10 backdrop-blur-md border border-[#4F200D]/20 rounded-xl text-[#4F200D] hover:bg-[#4F200D]/20 transition-all duration-300"
          >
            <Filter className="w-5 h-5" />
            <span>{showFilters ? "Hide" : "Show"} Filters</span>
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-md border border-red-400/30 rounded-xl text-red-600 hover:bg-red-500/30 transition-all duration-300"
            >
              <X className="w-4 h-4" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="bg-white/60 backdrop-blur-xl border border-[#4F200D]/10 rounded-2xl p-8 mb-8 shadow-2xl">
            {/* Category filter buttons */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#4F200D] mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-[#FFD93D] to-[#FFD93D] rounded-full"></div>
                Categories
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? "bg-[#FFD93D] text-[#4F200D] shadow-lg shadow-[#FFD93D]/25 border border-[#FFD93D]"
                        : "bg-[#4F200D]/10 text-[#4F200D] hover:bg-[#4F200D]/20 border border-[#4F200D]/20"
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating filter slider */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-[#4F200D] mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-[#FFD93D] to-[#FFD93D] rounded-full"></div>
                Filter by Rating
              </h2>
              <div className="max-w-lg">
                <RatingSlider
                  min={1}
                  max={5}
                  step={0.5}
                  value={selectedRating}
                  onChange={handleRatingChange}
                />
              </div>
            </div>
          </div>
        )}

        {/* Books display */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {filteredBooks.map((book, index) => (
              <div
                key={`${book.title}-${index}`}
                className="animate-fade-in"
                style={{
                  animationDelay: `${(index % 8) * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <BookCard {...book} onBookClick={handleBookClick} />
              </div>
            ))}
          </div>
        ) : (
          <div className="col-span-full text-center py-24">
            <div className="bg-white/60 backdrop-blur-xl border border-[#4F200D]/10 rounded-2xl p-12 max-w-md mx-auto">
              <BookOpen className="w-16 h-16 text-[#FFD93D] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-[#4F200D] mb-4">
                No Books Found
              </h3>
              <p className="text-[#4F200D]/70 mb-6">
                No books match your current filter criteria. Try adjusting your
                filters or browse all books.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-[#FFD93D] text-[#4F200D] rounded-xl font-semibold hover:bg-[#FFD93D]/80 transition-all duration-300 transform hover:scale-105 border border-[#FFD93D]"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Book Modal */}
      <BookModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        book={selectedBook}
      />
    </div>
  );
};

export default BookPage;
