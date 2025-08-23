import React, { useState } from "react";
import { X, Trash2, AlertTriangle } from "lucide-react";

interface DeleteBookFormProps {
  onClose: () => void;
}

const DeleteBookForm: React.FC<DeleteBookFormProps> = ({ onClose }) => {
  const [selectedBook, setSelectedBook] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  // Dummy book data for selection
  const books = [
    { id: "1", title: "The Midnight Library", author: "Matt Haig" },
    { id: "2", title: "Atomic Habits", author: "James Clear" },
    { id: "3", title: "The Seven Husbands", author: "Taylor Jenkins Reid" },
    { id: "4", title: "Dune", author: "Frank Herbert" },
    { id: "5", title: "Project Hail Mary", author: "Andy Weir" },
  ];

  const handleBookSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBook(e.target.value);
    setConfirmDelete(false);
  };

  const handleDelete = () => {
    if (selectedBook && confirmDelete) {
      console.log("Deleting book:", selectedBook);
      // Delete book logic here
      onClose();
    }
  };

  const selectedBookData = books.find((book) => book.id === selectedBook);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
            Delete Book
          </h2>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">
              Select Book to Delete
            </label>
            <select
              value={selectedBook}
              onChange={handleBookSelect}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="" className="bg-slate-800">
                Choose a book to delete
              </option>
              {books.map((book) => (
                <option key={book.id} value={book.id} className="bg-slate-800">
                  {book.title} - {book.author}
                </option>
              ))}
            </select>
          </div>

          {selectedBook && selectedBookData && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="text-red-300 font-medium">Warning</span>
              </div>
              <p className="text-red-200 text-sm mb-4">
                You are about to permanently delete:
              </p>
              <div className="bg-white/10 rounded-lg p-3 mb-4">
                <p className="text-white font-medium">
                  {selectedBookData.title}
                </p>
                <p className="text-slate-300 text-sm">
                  by {selectedBookData.author}
                </p>
              </div>
              <p className="text-red-200 text-sm">
                This action cannot be undone. The book will be permanently
                removed from your collection.
              </p>
            </div>
          )}

          {selectedBook && (
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="confirmDelete"
                checked={confirmDelete}
                onChange={(e) => setConfirmDelete(e.target.checked)}
                className="w-4 h-4 text-red-600 bg-white/10 border-white/20 rounded focus:ring-red-500 focus:ring-2"
              />
              <label htmlFor="confirmDelete" className="text-white text-sm">
                I understand this action cannot be undone
              </label>
            </div>
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
              onClick={handleDelete}
              disabled={!selectedBook || !confirmDelete}
              className="flex-1 group relative px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="relative flex items-center justify-center gap-2">
                <Trash2 className="w-5 h-5" />
                <span>Delete Book</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBookForm;
