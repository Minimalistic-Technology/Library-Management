'use client'
import React, { useState, useEffect } from 'react';

// Define types for our data
interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  rating: number;
  price: number;
  coverImage: string;
}

// Sample book data
const sampleBooks: Book[] = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', rating: 4.5, price: 12.99, coverImage: '📘' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', rating: 4.8, price: 14.95, coverImage: '📕' },
  { id: 3, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'History', rating: 4.7, price: 18.50, coverImage: '📗' },
  { id: 4, title: 'Atomic Habits', author: 'James Clear', category: 'Self-Help', rating: 4.6, price: 11.99, coverImage: '📙' },
  { id: 5, title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', category: 'Psychology', rating: 4.9, price: 16.75, coverImage: '📓' },
  { id: 6, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', rating: 4.4, price: 9.99, coverImage: '📔' },
  { id: 7, title: 'Educated', author: 'Tara Westover', category: 'Memoir', rating: 4.7, price: 13.25, coverImage: '📒' },
  { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fantasy', rating: 4.8, price: 10.50, coverImage: '📚' },
  { id: 9, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', category: 'Psychology', rating: 4.5, price: 15.99, coverImage: '📖' },
  { id: 10, title: 'The Martian', author: 'Andy Weir', category: 'Sci-Fi', rating: 4.6, price: 8.99, coverImage: '🔬' },
  { id: 11, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Fiction', rating: 4.2, price: 7.99, coverImage: '📓' },
  { id: 12, title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', rating: 3.9, price: 9.50, coverImage: '📙' },
];

// Available categories
const categories = ['All', 'Fiction', 'History', 'Self-Help', 'Psychology', 'Sci-Fi', 'Memoir', 'Fantasy'];

// Available ratings
const ratings = [
  { value: 0, label: 'All Ratings' },
  { value: 4.5, label: '4.5+ Stars' },
  { value: 4.0, label: '4.0+ Stars' },
  { value: 3.5, label: '3.5+ Stars' },
  { value: 3.0, label: '3.0+ Stars' },
];

const BookPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(sampleBooks);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(sampleBooks);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRating, setSelectedRating] = useState<number>(0);

  // Filter books based on category and rating
  useEffect(() => {
    let result = books;
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      result = result.filter(book => book.category === selectedCategory);
    }
    
    // Apply rating filter
    if (selectedRating > 0) {
      result = result.filter(book => book.rating >= selectedRating);
    }
    
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

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Book Catalog</h1>
      
      {/* Category filter buttons */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Rating filter buttons */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Filter by Rating</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {ratings.map(rating => (
            <button
              key={rating.value}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center ${
                selectedRating === rating.value 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleRatingChange(rating.value)}
            >
              {rating.value > 0 && (
                <span className="mr-1 text-yellow-400">
                  {'★'.repeat(Math.floor(rating.value))}
                </span>
              )}
              {rating.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Books display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div key={book.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex justify-center items-center h-48 bg-gray-100 text-7xl">
                {book.coverImage}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 line-clamp-2 h-14">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                  {book.category}
                </span>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    {'★'.repeat(Math.floor(book.rating))}
                    {'☆'.repeat(5 - Math.floor(book.rating))}
                  </div>
                  <span className="text-gray-600 text-sm ml-1">({book.rating})</span>
                </div>
                <p className="text-green-600 font-bold">${book.price.toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-gray-500">No books found for the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookPage;