"use client";
import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Lock,
  Mail,
  Eye,
  EyeOff,
  IdCard,
  UserCheck,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      input:-webkit-autofill,
      input:-webkit-autofill:hover, 
      input:-webkit-autofill:focus, 
      input:-webkit-autofill:active {
        -webkit-background-clip: text;
        -webkit-text-fill-color: #4F200D;
        transition: background-color 5000s ease-in-out 0s;
        box-shadow: inset 0 0 20px 20px rgba(255, 217, 61, 0.1);
      }
      
      input:-internal-autofill-selected {
        background-color: rgba(255, 217, 61, 0.1) !important;
        background-image: none !important;
        color: #4F200D !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Login attempt:", formData);
    setIsLoading(false);

    router.push("/Home");
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-center justify-center p-4"
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

      <div className="relative z-10 w-full max-w-md">
        <div
          className="backdrop-blur-lg rounded-2xl shadow-2xl border p-8"
          style={{ backgroundColor: "#FFD93D20", borderColor: "#FFD93D40" }}
        >
          <div className="text-center mb-8">
           

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border mb-4"
              style={{
                backgroundColor: "#FFD93D30",
                borderColor: "#FFD93D50",
                color: "#4F200D",
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "#FFD93D" }} />
              <span className="text-sm font-medium">Student Portal</span>
            </div>

            <h1
              className="text-3xl font-bold mb-2"
              style={{ color: "#4F200D" }}
            >
              Welcome Back
            </h1>
            <p className="text-sm" style={{ color: "#4F200D80" }}>
              Sign in to access your library account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="studentName"
                className="text-sm font-medium"
                style={{ color: "#4F200D" }}
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserCheck
                    className="h-5 w-5"
                    style={{ color: "#4F200D60" }}
                  />
                </div>
                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 backdrop-blur-sm border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{
                    backgroundColor: "#FFD93D20",
                    borderColor: "#FFD93D40",
                    color: "#4F200D",
                    focusRingColor: "#FFD93D",
                  }}
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="studentId"
                className="text-sm font-medium"
                style={{ color: "#4F200D" }}
              >
                Student ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IdCard className="h-5 w-5" style={{ color: "#4F200D60" }} />
                </div>
                <input
                  id="studentId"
                  name="studentId"
                  type="text"
                  required
                  autoComplete="username"
                  value={formData.studentId}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 backdrop-blur-sm border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{
                    backgroundColor: "#FFD93D20",
                    borderColor: "#FFD93D40",
                    color: "#4F200D",
                  }}
                  placeholder="Enter your student ID"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium"
                style={{ color: "#4F200D" }}
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5" style={{ color: "#4F200D60" }} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 backdrop-blur-sm border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{
                    backgroundColor: "#FFD93D20",
                    borderColor: "#FFD93D40",
                    color: "#4F200D",
                  }}
                  placeholder="Enter your student email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium"
                style={{ color: "#4F200D" }}
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5" style={{ color: "#4F200D60" }} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 backdrop-blur-sm border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{
                    backgroundColor: "#FFD93D20",
                    borderColor: "#FFD93D40",
                    color: "#4F200D",
                  }}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center transition-colors"
                  style={{ color: "#4F200D60" }}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded transition-colors"
                  style={{ accentColor: "#FFD93D" }}
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-sm"
                  style={{ color: "#4F200D" }}
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: "#FFD93D" }}
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="group w-full font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-lg"
              style={{
                backgroundColor: "#FFD93D",
                color: "#4F200D",
                boxShadow: "0 10px 25px -5px #FFD93D40",
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div
                    className="w-5 h-5 border-2 rounded-full animate-spin mr-2"
                    style={{
                      borderColor: "#4F200D40",
                      borderTopColor: "#4F200D",
                    }}
                  ></div>
                  Signing in...
                </div>
              ) : (
                <>
                  <span>Sign In</span>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1"
                    style={{ backgroundColor: "#4F200D20" }}
                  >
                    <BookOpen
                      className="w-3 h-3"
                      style={{ color: "#4F200D" }}
                    />
                  </div>
                </>
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm" style={{ color: "#4F200D80" }}>
              Don't have an account?{" "}
              <a
                href="/Signup"
                className="font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: "#FFD93D" }}
              >
                Sign up for free
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;