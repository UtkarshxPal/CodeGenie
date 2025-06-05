import { useState } from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Sparkles, Home, MessageCircle, User, Menu } from "lucide-react";

export default function Navbar() {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                CodeGenie
              </div>
            </Link>

            {/* Hamburger Menu (Mobile) */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-gray-200 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Home className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </Link>

              <Link
                to="/chat"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>AI Assistant</span>
              </Link>

              <div className="flex items-center gap-3 ml-2">
                <SignedOut>
                  <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl overflow-hidden">
                    <SignInButton mode="modal">
                      <button className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-white/20 hover:text-white transition-all duration-300">
                        <User className="w-4 h-4" />
                        <span className="font-medium">Sign In</span>
                      </button>
                    </SignInButton>
                  </div>
                </SignedOut>

                <SignedIn>
                  <div className="flex items-center gap-3">
                    {user && (
                      <div className="flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-xl">
                        <span className="text-gray-300 text-sm font-medium">
                          {user.fullName ||
                            user.username ||
                            user.emailAddresses[0]?.emailAddress}
                        </span>
                      </div>
                    )}
                    <UserButton />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-4 top-20 w-60 bg-slate-900/90 backdrop-blur-lg border border-white/20 rounded-xl p-4 flex flex-col gap-3 z-50 shadow-xl lg:hidden">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 hover:text-purple-200 transition-all duration-300 rounded-lg"
              >
                <Home className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </Link>

              <Link
                to="/chat"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium transition-all duration-300 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>AI Assistant</span>
              </Link>

              <SignedOut>
                <div className="overflow-hidden rounded-lg border border-white/20">
                  <SignInButton mode="modal">
                    <button className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 hover:text-purple-200 transition-all duration-300 w-full text-left">
                      <User className="w-4 h-4" />
                      <span className="font-medium">Sign In</span>
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>

              <SignedIn>
                {user && (
                  <div className="px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-sm text-white">
                    {user.fullName ||
                      user.username ||
                      user.emailAddresses[0]?.emailAddress}
                  </div>
                )}
                <UserButton />
              </SignedIn>
            </div>
          )}
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>
    </nav>
  );
}
