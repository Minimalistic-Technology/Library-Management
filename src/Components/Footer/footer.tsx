// //// done

// import {
//   Book,
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Github,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <Book className="h-8 w-8 text-blue-400" />
//               <h3 className="text-xl font-bold">Minimalistic Library</h3>
//             </div>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Your gateway to endless knowledge and imagination. Discover, read,
//               and grow with our carefully curated collection of books.
//             </p>
//             <div className="flex space-x-4">
//               <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
//               <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
//               <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
//               {/* <Github className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" /> */}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-white">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Browse Books
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   New Arrivals
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Best Sellers
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Author Spotlight
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Book Reviews
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-white">Categories</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Fiction
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Non-Fiction
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Science Fiction
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Mystery
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Biography
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-white">Contact Us</h4>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center space-x-3">
//                 <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
//                 <span className="text-gray-400">
//                   123 Library Street, Book City, BC 12345
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
//                 <span className="text-gray-400">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
//                 <span className="text-gray-400">
//                   info@minimalisticlibrary.com
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 text-sm">
//             © 2025 Minimalistic Library. All rights reserved.
//           </p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a
//               href="#"
//               className="text-gray-400 hover:text-white text-sm transition-colors"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-white text-sm transition-colors"
//             >
//               Terms of Service
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-white text-sm transition-colors"
//             >
//               Cookie Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }








































// 
import {
  BookOpen,
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-teal-600 rounded-xl">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent">
                BookVerse
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your gateway to extraordinary stories. Discover, read, and fall in
              love with books from around the world.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg text-slate-400 hover:text-white hover:bg-white/20 transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg text-slate-400 hover:text-white hover:bg-white/20 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg text-slate-400 hover:text-white hover:bg-white/20 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg text-slate-400 hover:text-white hover:bg-white/20 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Browse Books
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  New Releases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Bestsellers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>hello@bookverse.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="h-5 w-5 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span>123 Book Street, Reading City</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded-lg hover:scale-105 transition-transform">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 BookVerse. All rights reserved. Made with ❤️ for book lovers.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}