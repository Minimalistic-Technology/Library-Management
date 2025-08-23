"use client";
import { useState } from "react";
import BookCard from "../../Components/BookCard/BookCard";
import { Sparkles, TrendingUp } from "lucide-react";

const initialBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    rating: 4.2,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$12.99",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$14.99",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$13.99",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$11.99",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-age",
    rating: 3.9,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$10.99",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    genre: "Adventure",
    rating: 4.1,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$12.49",
  },
];

export default function BookGrid() {
  const [displayedBooks, setDisplayedBooks] = useState(initialBooks);
  const [showingAll, setShowingAll] = useState(false);
  /*  Initializes isLoading state to track the loading state of the "Load More" button. */
  const [isLoading, setIsLoading] = useState(false);

  const handleViewAllBooks = async () => {
    setIsLoading(true);

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (showingAll) {
      setDisplayedBooks([...displayedBooks, ...initialBooks]);
    } else {
      setDisplayedBooks([...initialBooks, ...initialBooks]);
      setShowingAll(true);
    }

    setIsLoading(false);
  };

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {displayedBooks.map((book, index) => (
            <div
              key={`${book.title}-${index}`}

              /*  Right now, you’re telling the browser:

              “Delay some animation, then keep its final state.”

              Problem: since animate-fade-in isn’t defined, there’s no animation to delay.

              Result: nothing visibly animates — cards just “exist” immediately. */

              // className="animate-fade-in"
              // style={{
              //   animationDelay: `${(index % 8) * 100}ms`,
              //   animationFillMode: "both",
              // }}
            >
              {/*
                    SPREAD OPERETOR
                    
                    const book = {

                    title: "The Alchemist",
                    author: "Paulo Coelho",
                    year: 1988,
                  };

                  Then this:
                  <BookCard {...book} />

                is the same as writing:
                <BookCard title="The Alchemist" author="Paulo Coelho" year={1988} />

                So inside BookCard, you could access:

                function BookCard({ title, author, year }) {
                  return (
                    <div>
                      <h2>{title}</h2>
                      <p>{author}</p>
                      <span>{year}</span>
                    </div>
                  );
                } */}


              <BookCard {...book} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button
            onClick={handleViewAllBooks}
            // disabled={isLoading} → disables the button while loading.
            disabled={isLoading}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {/* Shine effect overlay ✨ */}
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="relative flex items-center gap-3">
              {isLoading ? (
                <>
                  {/* loading spiner */}
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Loading Amazing Books...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-180" />
                  <span>Discover More Treasures</span>
                </>
              )}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
