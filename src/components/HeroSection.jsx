import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
      <section className="relative bg-transparent text-white min-h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">

          {/* Blurred Colorful Circles */}
          <div className="absolute h-40 w-40 rounded-full bg-pink-500/10 blur-xl top-1/4 left-1/4 animate-pulse" />
          <div className="absolute h-64 w-64 rounded-full bg-indigo-500/10 blur-xl bottom-1/4 right-1/4 animate-pulse" />

          {/* Background Gradient (Same as Features Section) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2a]/40 to-[#1a1a4f]/20" />

          {/* ✅ Soft Purple Glow (Added for Consistency) */}


          {/* Interactive Mouse-Tracking Dot Grid */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="0.5" fill="rgba(236, 72, 153, 0.3)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)"
                  style={{
                    transform: `translate(${(mousePosition.x / window.innerWidth) * 10}px, ${(mousePosition.y / window.innerHeight) * 10}px)`
                  }}
            />
          </svg>
        </div>

        {/* Main Content with Glass Effect */}
        <div className="relative z-10 bg-black/20 backdrop-blur-xl p-10 mt-15 rounded-2xl shadow-lg max-w-3xl border border-pink-500/50">

          {/* Soft glow behind card */}
          <div className="absolute -inset-4 bg-pink-500/20 rounded-3xl blur-xl -z-10" />

          {/* Animated Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-500 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500 rounded-br-lg" />

          {/* Title with Shimmer Effect */}
          <div className="relative">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              AI Diagnostic Assistant
            </h1>
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-30 animate-shimmer" />
            </div>
          </div>

          <p className="text-lg text-gray-200 mt-4 backdrop-blur-sm py-2">
            Revolutionizing medical diagnosis with AI-powered precision.
          </p>

          {/* CTA Button */}
          <div className="mt-6 flex justify-center">
            <Link to="/dashboard">
              <button className="group relative px-6 py-3 overflow-hidden rounded-xl">

                {/* Button Background with Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 group-hover:scale-105 transition-transform duration-300" />

                {/* Subtle Pulsing Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl opacity-70 blur-sm group-hover:opacity-100 transition duration-300 animate-pulse"
                     style={{ animationDuration: "2s" }}
                />

                {/* Text with Hover Effect */}
                <span className="relative font-semibold group-hover:tracking-wider transition-all duration-300">
                Try Now
              </span>

                {/* Shine Effect on Hover */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
              </button>
            </Link>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes shine {
          100% { left: 125%; }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-shine {
          animation: shine 1.5s;
        }
      `}</style>
      </section>
  );
};

export default HeroSection;
