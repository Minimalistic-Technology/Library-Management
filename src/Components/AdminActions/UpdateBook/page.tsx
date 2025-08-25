import React, { useState } from "react";
import { X, Save, Edit3 } from "lucide-react";

interface UpdateBookFormProps {
  onClose: () => void;
}

const UpdateBookForm: React.FC<UpdateBookFormProps> = ({ onClose }) => {
  const [selectedBook, setSelectedBook] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    image: "",
    price: "",
    description: "",
  });

  // Dummy book data for selection
  const books = [
    { id: "1", title: "The Midnight Library", author: "Matt Haig" },
    { id: "2", title: "Atomic Habits", author: "James Clear" },
    { id: "3", title: "The Seven Husbands", author: "Taylor Jenkins Reid" },
    { id: "4", title: "Dune", author: "Frank Herbert" },
    { id: "5", title: "Project Hail Mary", author: "Andy Weir" },
  ];

  const handleBookSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const bookId = e.target.value;
    setSelectedBook(bookId);

    // Load book data when selected (dummy data)
    if (bookId) {
      const book = books.find((b) => b.id === bookId);
      if (book) {
        setFormData({
          title: book.title,
          author: book.author,
          genre: "Fiction",
          rating: "4.5",
          image:
            "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
          price: "19.99",
          description:
            "A captivating story that will keep you engaged from start to finish.",
        });
      }
    } else {
      setFormData({
        title: "",
        author: "",
        genre: "",
        rating: "",
        image: "",
        price: "",
        description: "",
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating book:", selectedBook, formData);
    // Update book logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Update Book
          </h2>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">
              Select Book to Update
            </label>
            <select
              value={selectedBook}
              onChange={handleBookSelect}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="" className="bg-slate-800">
                Choose a book to update
              </option>
              {books.map((book) => (
                <option key={book.id} value={book.id} className="bg-slate-800">
                  {book.title} - {book.author}
                </option>
              ))}
            </select>
          </div>

          {selectedBook && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter book title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter author name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Genre
                  </label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="" className="bg-slate-800">
                      Select genre
                    </option>
                    <option value="Fiction" className="bg-slate-800">
                      Fiction
                    </option>
                    <option value="Non-Fiction" className="bg-slate-800">
                      Non-Fiction
                    </option>
                    <option value="Mystery" className="bg-slate-800">
                      Mystery
                    </option>
                    <option value="Romance" className="bg-slate-800">
                      Romance
                    </option>
                    <option value="Sci-Fi" className="bg-slate-800">
                      Sci-Fi
                    </option>
                    <option value="Fantasy" className="bg-slate-800">
                      Fantasy
                    </option>
                    <option value="Biography" className="bg-slate-800">
                      Biography
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Rating (Read Only)
                  </label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    min="0"
                    max="5"
                    step="0.1"
                    disabled
                    className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-slate-400 cursor-not-allowed opacity-60"
                    placeholder="0.0 - 5.0"
                  />
                  <p className="text-xs text-slate-400 mt-1">
                    Rating cannot be modified
                  </p>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Enter book description"
                  required
                />
              </div>
            </>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!selectedBook}
              className="flex-1 group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="relative flex items-center justify-center gap-2">
                <Edit3 className="w-5 h-5" />
                <span>Update Book</span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookForm;