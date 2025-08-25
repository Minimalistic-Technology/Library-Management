"use client"
import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, UserPlus, BookOpen, Calendar, Phone, Sparkles, Shield } from 'lucide-react';
import {useRouter} from 'next/navigation';

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    studentId: '',
    dateOfBirth: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const style = document.createElement('style');
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

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getPasswordStrengthColor = (strength: number) => {
    if (strength <= 1) return '#ef4444';
    if (strength <= 2) return '#f97316';
    if (strength <= 3) return '#eab308';
    if (strength <= 4) return '#3b82f6';
    return '#22c55e';
  };

  const getPasswordStrengthText = (strength: number) => {
    if (strength <= 1) return 'Very Weak';
    if (strength <= 2) return 'Weak';
    if (strength <= 3) return 'Fair';
    if (strength <= 4) return 'Good';
    return 'Strong';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('Signup attempted with:', formData);
      router.push("/Home");
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-8" style={{ backgroundColor: '#F6F1E9' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#FFD93D20' }}></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", backgroundColor: '#FFD93D15' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s", backgroundColor: '#FFD93D10' }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="backdrop-blur-lg rounded-2xl shadow-2xl border p-8" style={{ backgroundColor: '#FFD93D20', borderColor: '#FFD93D40' }}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ backgroundColor: '#FFD93D' }}>
              <UserPlus className="w-8 h-8" style={{ color: '#4F200D' }} />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border mb-4" 
                 style={{ backgroundColor: '#FFD93D30', borderColor: '#FFD93D50', color: '#4F200D' }}>
              <Sparkles className="w-4 h-4" style={{ color: '#FFD93D' }} />
              <span className="text-sm font-medium">Join Our Library</span>
            </div>

            <h1 className="text-3xl font-bold mb-2" style={{ color: '#4F200D' }}>Create Account</h1>
            <p className="text-sm" style={{ color: '#4F200D80' }}>Join thousands of students in our digital library</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium" style={{ color: '#4F200D' }}>
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5" style={{ color: '#4F200D60' }} />
                  </div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 backdrop-blur-sm border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      backgroundColor: '#FFD93D20', 
                      borderColor: '#FFD93D40', 
                      color: '#4F200D'
                    }}
                    placeholder="Full Name"
                  />
                </div>
              </div>

              {/* Student ID Field */}
              <div className="space-y-2">
                <label htmlFor="studentId" className="text-sm font-medium" style={{ color: '#4F200D' }}>
                  Student ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BookOpen className="h-5 w-5" style={{ color: '#4F200D60' }} />
                  </div>
                  <input
                    id="studentId"
                    name="studentId"
                    type="text"
                    required
                    autoComplete="off"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 backdrop-blur-sm border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      backgroundColor: '#FFD93D20', 
                      borderColor: '#FFD93D40', 
                      color: '#4F200D'
                    }}
                    placeholder="Student ID"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium" style={{ color: '#4F200D' }}>
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5" style={{ color: '#4F200D60' }} />
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
                      backgroundColor: '#FFD93D20', 
                      borderColor: '#FFD93D40', 
                      color: '#4F200D'
                    }}
                    placeholder="Email Address"
                  />
                </div>
              </div>

              {/* Date of Birth Field */}
              <div className="space-y-2">
                <label htmlFor="dateOfBirth" className="text-sm font-medium" style={{ color: '#4F200D' }}>
                  Date of Birth
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5" style={{ color: '#4F200D60' }} />
                  </div>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    required
                    autoComplete="bday"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 backdrop-blur-sm border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      backgroundColor: '#FFD93D20', 
                      borderColor: '#FFD93D40', 
                      color: '#4F200D'
                    }}
                  />
                </div>
              </div>

              {/* Phone Number Field */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="phoneNumber" className="text-sm font-medium" style={{ color: '#4F200D' }}>
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5" style={{ color: '#4F200D60' }} />
                  </div>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 backdrop-blur-sm border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      backgroundColor: '#FFD93D20', 
                      borderColor: '#FFD93D40', 
                      color: '#4F200D'
                    }}
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium" style={{ color: '#4F200D' }}>
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5" style={{ color: '#4F200D60' }} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 backdrop-blur-sm border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      backgroundColor: '#FFD93D20', 
                      borderColor: '#FFD93D40', 
                      color: '#4F200D'
                    }}
                    placeholder="Create strong password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center transition-colors"
                    style={{ color: '#4F200D60' }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                    
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs" style={{ color: '#4F200D80' }}>Password Strength</span>
                      <span className="text-xs font-medium" style={{ color: getPasswordStrengthColor(passwordStrength) }}>
                        {getPasswordStrengthText(passwordStrength)}
                      </span>
                    </div>
                    <div className="w-full rounded-full h-2" style={{ backgroundColor: '#4F200D20' }}>
                      <div 
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${(passwordStrength / 5) * 100}%`,
                          backgroundColor: getPasswordStrengthColor(passwordStrength)
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium" style={{ color: '#4F200D' }}>
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5" style={{ color: '#4F200D60' }} />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 backdrop-blur-sm border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      backgroundColor: '#FFD93D20', 
                      borderColor: formData.confirmPassword && formData.password !== formData.confirmPassword ? '#ef4444' : '#FFD93D40', 
                      color: '#4F200D'
                    }}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center transition-colors"
                    style={{ color: '#4F200D60' }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-xs mt-1" style={{ color: '#ef4444' }}>Passwords do not match</p>
                )}
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-3 p-4 rounded-xl backdrop-blur-sm border" style={{ backgroundColor: '#FFD93D30', borderColor: '#FFD93D50' }}>
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                required
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-4 w-4 rounded mt-0.5"
                style={{ accentColor: '#FFD93D' }}
              />
              <div className="flex-1">
                <label htmlFor="agreeToTerms" className="text-sm flex items-start gap-2" style={{ color: '#4F200D' }}>
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#FFD93D' }} />
                  <span>
                    I agree to the{' '}
                    <a href="#" className="font-medium hover:opacity-80 transition-colors duration-200" style={{ color: '#FFD93D' }}>
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-medium hover:opacity-80 transition-colors duration-200" style={{ color: '#FFD93D' }}>
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !formData.agreeToTerms || formData.password !== formData.confirmPassword}
              className="group w-full font-semibold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-lg mt-6"
              style={{ 
                backgroundColor: '#FFD93D', 
                color: '#4F200D',
                boxShadow: '0 10px 25px -5px #FFD93D40'
              }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: '#4F200D40', borderTopColor: '#4F200D' }}></div>
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-sm" style={{ color: '#4F200D80' }}>
              Already have an account?{' '}
              <a href="/Login" className="font-medium transition-colors duration-200 hover:opacity-80" style={{ color: '#FFD93D' }}>
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;