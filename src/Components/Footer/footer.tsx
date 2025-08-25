
"use client";

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
    <footer
      className="relative backdrop-blur-xl border-t mt-5"
      style={{ backgroundColor: "#4F200D40", borderColor: "#FFD93D40" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-2 rounded-xl"
                style={{ backgroundColor: "#FFD93D" }}
              >
                <BookOpen className="h-6 w-6" style={{ color: "#4F200D" }} />
              </div>
              <span className="text-2xl font-bold" style={{ color: "#4F200D" }}>
                Minimalistic Library
              </span>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: "#4F200D80" }}>
              Your gateway to extraordinary stories. Discover, read, and fall in
              love with books from around the world.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg transition-all hover:scale-110"
                style={{ backgroundColor: "#FFD93D20", color: "#4F200D80" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFD93D40";
                  e.currentTarget.style.color = "#4F200D";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFD93D20";
                  e.currentTarget.style.color = "#4F200D80";
                }}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg transition-all hover:scale-110"
                style={{ backgroundColor: "#FFD93D20", color: "#4F200D80" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFD93D40";
                  e.currentTarget.style.color = "#4F200D";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFD93D20";
                  e.currentTarget.style.color = "#4F200D80";
                }}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg transition-all hover:scale-110"
                style={{ backgroundColor: "#FFD93D20", color: "#4F200D80" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFD93D40";
                  e.currentTarget.style.color = "#4F200D";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFD93D20";
                  e.currentTarget.style.color = "#4F200D80";
                }}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg transition-all hover:scale-110"
                style={{ backgroundColor: "#FFD93D20", color: "#4F200D80" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFD93D40";
                  e.currentTarget.style.color = "#4F200D";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFD93D20";
                  e.currentTarget.style.color = "#4F200D80";
                }}
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6" style={{ color: "#4F200D" }}>
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:scale-105 inline-block"
                  style={{ color: "#4F200D80" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4F200D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4F200D80")
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:scale-105 inline-block"
                  style={{ color: "#4F200D80" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4F200D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4F200D80")
                  }
                >
                  Browse Books
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:scale-105 inline-block"
                  style={{ color: "#4F200D80" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4F200D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4F200D80")
                  }
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:scale-105 inline-block"
                  style={{ color: "#4F200D80" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4F200D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4F200D80")
                  }
                >
                  New Releases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:scale-105 inline-block"
                  style={{ color: "#4F200D80" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4F200D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4F200D80")
                  }
                >
                  Bestsellers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-6" style={{ color: "#4F200D" }}>
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:scale-105 inline-block"
                  style={{ color: "#4F200D80" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4F200D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4F200D80")
                  }
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:scale-105 inline-block"
                  style={{ color: "#4F200D80" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4F200D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4F200D80")
                  }
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:scale-105 inline-block"
                  style={{ color: "#4F200D80" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4F200D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4F200D80")
                  }
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:scale-105 inline-block"
                  style={{ color: "#4F200D80" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4F200D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4F200D80")
                  }
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:scale-105 inline-block"
                  style={{ color: "#4F200D80" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4F200D")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4F200D80")
                  }
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6" style={{ color: "#4F200D" }}>
              Contact Info
            </h3>
            <div className="space-y-4">
              <div
                className="flex items-center gap-3"
                style={{ color: "#4F200D80" }}
              >
                <Mail className="h-5 w-5" style={{ color: "#FFD93D" }} />
                <span>hello@bookverse.com</span>
              </div>
              <div
                className="flex items-center gap-3"
                style={{ color: "#4F200D80" }}
              >
                <Phone className="h-5 w-5" style={{ color: "#FFD93D" }} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div
                className="flex items-center gap-3"
                style={{ color: "#4F200D80" }}
              >
                <MapPin className="h-5 w-5" style={{ color: "#FFD93D" }} />
                <span>123 Book Street, Reading City</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-medium mb-4" style={{ color: "#4F200D" }}>
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: "#FFD93D20",
                    borderColor: "#FFD93D40",
                    color: "#4F200D",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#FFD93D";
                    e.currentTarget.style.boxShadow = "0 0 0 2px #FFD93D40";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#FFD93D40";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  className="px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                  style={{ backgroundColor: "#FFD93D", color: "#4F200D" }}
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderColor: "#FFD93D40" }}
        >
          <p className="text-sm" style={{ color: "#4F200D80" }}>
            © 2024 BookVerse. All rights reserved. Made with ❤️ for book lovers.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm transition-colors hover:scale-105"
              style={{ color: "#4F200D80" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4F200D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4F200D80")}
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm transition-colors hover:scale-105"
              style={{ color: "#4F200D80" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4F200D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4F200D80")}
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm transition-colors hover:scale-105"
              style={{ color: "#4F200D80" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4F200D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4F200D80")}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}