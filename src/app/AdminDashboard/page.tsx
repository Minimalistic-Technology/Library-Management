"use client";
import React, { useState } from "react";
import AddBookForm from "../../Components/AdminActions/AddBook/page";
import UpdateBookForm from "../../Components/AdminActions/UpdateBook/page";
import DeleteBookForm from "../../Components/AdminActions/DeleteBook/page";
import { useRouter } from "next/navigation";
import {
  Plus,
  Trash2,
  Edit3,
  Book,
  Users,
  TrendingUp,
  Sparkles,
  Settings,
  Search,
  Filter,
  MoreVertical,
  BookOpen,
  Star,
  Eye,
  Download,
  LogOut,
} from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  /* Declares a state variable showLogoutMenu to toggle the visibility of a logout dropdown menu, initialized to false */
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);

  const router = useRouter();

  const handleLogout = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    console.log("Logout button clicked"); // Debug log
    setShowLogoutMenu(false); // Close the menu
    try {
      router.push("/Home"); // Navigate to Home
      console.log("Navigating to /Home"); // Debug log
    } catch (error) {
      console.error("Navigation error:", error); // Error handling
    }
  };

  /* Defines the toggleLogoutMenu function, which toggles the showLogoutMenu state between true and false.

  Logs a debug message when the settings button is clicked */
  const toggleLogoutMenu = () => {
    console.log("Settings button clicked"); // Debug log
    setShowLogoutMenu((prev) => !prev);
  };

  // Dummy data for demonstration
  const stats = [
    {
      label: "Total Books",
      value: "2,847",
      icon: Book,
      color: "from-purple-400 to-purple-600",
    },
    {
      label: "Active Users",
      value: "12,439",
      icon: Users,
      color: "from-teal-400 to-teal-600",
    },
    {
      label: "Monthly Growth",
      value: "+23%",
      icon: TrendingUp,
      color: "from-indigo-400 to-indigo-600",
    },
    {
      label: "Total Views",
      value: "89.2k",
      icon: Eye,
      color: "from-pink-400 to-pink-600",
    },
  ];

  const recentBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      status: "Published",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      status: "Draft",
      rating: 4.9,
    },
    {
      id: 3,
      title: "The Seven Husbands",
      author: "Taylor Jenkins Reid",
      status: "Published",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Dune",
      author: "Frank Herbert",
      status: "Published",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Project Hail Mary",
      author: "Andy Weir",
      status: "Review",
      rating: 4.8,
    },
  ];

  return (
    /* min-h-screen: Sets the minimum height to the full viewport height.

    bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900: Applies a gradient background (slate to purple to slate).

    relative: Positions the container relatively for z-index stacking.

    overflow-hidden: Prevents content from overflowing the container */
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div> */}
      </div>

      {/* Navigation Bar */}
      <div className="relative z-50 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-teal-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Admin</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search books..."
                  className="w-64 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <button
                  onClick={toggleLogoutMenu}
                  className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Settings className="w-5 h-5" />
                </button>

                {showLogoutMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl z-60">
                    <button
                      onClick={(e) => {
                        console.log("Attempting to trigger logout"); // Debug log
                        handleLogout(e);
                      }}
                      className="w-full px-4 py-3 text-left text-white hover:bg-white/20 transition-all duration-300 rounded-xl flex items-center gap-2 hover:text-red-500  cursor-pointer"
                    >
                      <LogOut className="w-5 h-5" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Admin Dashboard</span>
              <Settings className="w-4 h-4 text-teal-400" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-teal-100 bg-clip-text text-transparent mb-6">
              Book Management
            </h1>

            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
              Manage your book collection, track performance, and oversee your
              digital library with powerful admin tools.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mt-8 rounded-full"></div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                /* animationDelay: Staggers card animations. */
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Action Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Add Book Card */}
            <div className="group p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl mx-auto flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Plus className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl mx-auto blur-xl opacity-20"></div>
              </div>

              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent mb-4 text-center">
                Add New Book
              </h3>

              {/* leading-relaxed : It controls the space between lines of text (line height).
              leading-relaxed sets the line-height to a more spacious value compared to the default */}
              <p className="text-slate-300 text-center mb-6 leading-relaxed">
                Upload and configure new books to expand your digital library
                collection.
              </p>

              <button
                onClick={() => setShowAddForm(true)}
                className="w-full group relative px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  <span>Add Book</span>
                </div>
              </button>
            </div>

            {/* Update Book Card */}
            <div className="group p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Edit3 className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl mx-auto blur-xl opacity-20"></div>
              </div>

              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4 text-center">
                Update Books
              </h3>

              <p className="text-slate-300 text-center mb-6 leading-relaxed">
                Modify existing book details, pricing, and metadata information.
              </p>

              <button
                onClick={() => setShowUpdateForm(true)}
                className="w-full group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Edit3 className="w-5 h-5" />
                  <span>Update Book</span>
                </div>
              </button>
            </div>

            {/* Delete Book Card */}
            <div className="group p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl mx-auto flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Trash2 className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-red-400 to-rose-400 rounded-2xl mx-auto blur-xl opacity-20"></div>
              </div>

              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent mb-4 text-center">
                Delete Books
              </h3>

              <p className="text-slate-300 text-center mb-6 leading-relaxed">
                Remove books from your collection and manage inventory cleanup.
              </p>

              <button
                onClick={() => setShowDeleteForm(true)}
                className="w-full group relative px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Trash2 className="w-5 h-5" />
                  <span>Delete Book</span>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Books Table */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Recent Books
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Manage your latest book additions
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left py-4 px-6 text-slate-300 font-semibold">
                      Book
                    </th>
                    <th className="text-left py-4 px-6 text-slate-300 font-semibold">
                      Author
                    </th>
                    <th className="text-left py-4 px-6 text-slate-300 font-semibold">
                      Status
                    </th>
                    <th className="text-left py-4 px-6 text-slate-300 font-semibold">
                      Rating
                    </th>
                    <th className="text-right py-4 px-6 text-slate-300 font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentBooks.map((book, index) => (
                    <tr
                      key={book.id}
                      className="border-b border-white/10 hover:bg-white/5 transition-all duration-300"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      <td className="py-4 px-6">
                        <div className="font-medium text-white">
                          {book.title}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-slate-300">{book.author}</div>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            book.status === "Published"
                              ? "bg-green-500/20 text-green-300 border border-green-500/30"
                              : book.status === "Draft"
                              ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                              : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          }`}
                        >
                          {book.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-white font-medium">
                            {book.rating}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
              <div className="flex items-center gap-2">
                <Book className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">
                  2,847 Total Books
                </span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300">+23% This Month</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-indigo-400" />
                <span className="text-slate-300">89.2k</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Forms 
      
      Conditionally renders modal forms based on state:

      showAddForm: Shows AddBookForm when true.

      showUpdateForm: Shows UpdateBookForm when true.

      showDeleteForm: Shows DeleteBookForm when true.
      
      Each form receives an onClose prop to hide itself by setting the corresponding state to false.
      
      */}
      {showAddForm && <AddBookForm onClose={() => setShowAddForm(false)} />}
      {showUpdateForm && (
        <UpdateBookForm onClose={() => setShowUpdateForm(false)} />
      )}
      {showDeleteForm && (
        <DeleteBookForm onClose={() => setShowDeleteForm(false)} />
      )}
    </div>
  );
}

export default App;