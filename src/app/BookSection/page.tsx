"use client";
import { useState } from "react";
import BookCard from "../../Components/BookCard/BookCard";
import BookModal from "../../Components/BookDetailModel/page";
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
    description:
      "A timeless American classic that explores themes of wealth, love, and the American Dream. Set in the summer of 1922, the story follows Nick Carraway as he becomes neighbors with the mysterious Jay Gatsby, who throws lavish parties in hopes of winning back his lost love, Daisy Buchanan. A profound meditation on the decadence and disillusion of the Jazz Age.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$14.99",
    description:
      "A powerful story of racial injustice and childhood innocence set in 1930s Alabama. Through the eyes of young Scout Finch, we witness her father Atticus defending a Black man falsely accused of rape. This Pulitzer Prize-winning novel addresses themes of moral courage, prejudice, and the loss of innocence with profound sensitivity and insight.",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$13.99",
    description:
      "A chilling dystopian masterpiece that depicts a totalitarian society under the control of Big Brother. Winston Smith works for the Party, rewriting history, until he begins to question the system. Orwell's prophetic vision explores surveillance, propaganda, and the manipulation of truth in ways that remain startlingly relevant today.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$11.99",
    description:
      "A brilliant romantic comedy that follows the complex relationship between Elizabeth Bennet and the proud Mr. Darcy. Set in Georgian England, this novel masterfully explores themes of love, marriage, social class, and personal growth. Austen's wit and insight into human nature make this a enduring favorite that continues to captivate readers worldwide.",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-age",
    rating: 3.9,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$10.99",
    description:
      "A controversial and influential coming-of-age story narrated by the cynical teenager Holden Caulfield. After being expelled from prep school, Holden wanders through New York City, struggling with depression, alienation, and his transition to adulthood. Salinger's authentic voice and exploration of teenage angst has resonated with generations of readers.",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    genre: "Adventure",
    rating: 4.1,
    image:
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    price: "$12.49",
    description:
      "A haunting allegory about civilization and human nature. When a group of British boys are stranded on a deserted island, their attempts at self-governance quickly deteriorate into chaos and savagery. Golding's Nobel Prize-winning novel is a dark exploration of the thin line between civilization and barbarism, making it a powerful commentary on human nature.",
  },
];

export default function BookGrid() {
  const [displayedBooks, setDisplayedBooks] = useState(initialBooks);
  const [showingAll, setShowingAll] = useState(false);
  /*  Initializes isLoading state to track the loading state of the "Load More" button. */
  const [isLoading, setIsLoading] = useState(false);

  // Modal state
  const [selectedBook, setSelectedBook] = useState<
    (typeof initialBooks)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleBookClick = (book: any) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#F6F1E9" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "#FFD93D20" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", backgroundColor: "#FFD93D15" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s", backgroundColor: "#FFD93D10" }}
        ></div>
      </div>

      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border mb-6"
              style={{
                backgroundColor: "#FFD93D20",
                borderColor: "#FFD93D40",
                color: "#4F200D",
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Curated Collection</span>
              <TrendingUp className="w-4 h-4" />
            </div>

            <h2
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "#4F200D" }}
            >
              Featured Literature
            </h2>

            <p
              className="text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#4F200D80" }}
            >
              Immerse yourself in carefully selected stories that have shaped
              minds and touched hearts across generations
            </p>

            <div
              className="w-24 h-1 mx-auto mt-8 rounded-full"
              style={{ backgroundColor: "#FFD93D" }}
            ></div>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {displayedBooks.map((book, index) => (
              <div
                key={`${book.title}-${index}`}

                /*  Right now, you're telling the browser:

              "Delay some animation, then keep its final state."

              Problem: since animate-fade-in isn't defined, there's no animation to delay.

              Result: nothing visibly animates — cards just "exist" immediately. */

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

                <BookCard {...book} onBookClick={handleBookClick} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button
              onClick={handleViewAllBooks}
              // disabled={isLoading} → disables the button while loading.
              disabled={isLoading}
              className="group relative px-8 py-4 font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#FFD93D",
                color: "#4F200D",
                boxShadow: "0 25px 50px -12px #FFD93D40",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 25px 50px -12px #FFD93D60";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 25px 50px -12px #FFD93D40";
              }}
            >
              {/* Shine effect overlay ✨ */}
              <div
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                style={{ backgroundColor: "#4F200D20" }}
              ></div>
              <div className="relative flex items-center gap-3">
                {isLoading ? (
                  <>
                    {/* loading spiner */}
                    <div
                      className="w-5 h-5 border-2 rounded-full animate-spin"
                      style={{
                        borderColor: "#4F200D30",
                        borderTopColor: "#4F200D",
                      }}
                    ></div>
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

      {/* Book Modal */}
      <BookModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        book={selectedBook}
      />
    </div>
  );
}