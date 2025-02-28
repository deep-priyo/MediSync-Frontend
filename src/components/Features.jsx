import { FaBrain, FaClock, FaShieldAlt, FaUserCheck } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Features = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: <FaBrain className="text-5xl text-pink-400 mx-auto group-hover:text-white" />,
      title: "AI-Powered Analysis",
      description: "Uses deep learning to analyze reports accurately.",
      borderColor: "border-pink-500",
      glowColor: "#ec4899"
    },
    {
      icon: <FaClock className="text-5xl text-blue-400 mx-auto group-hover:text-white" />,
      title: "Fast Diagnosis",
      description: "Get instant AI-generated medical insights.",
      borderColor: "border-blue-500",
      glowColor: "#3b82f6"
    },
    {
      icon: <FaShieldAlt className="text-5xl text-purple-400 mx-auto group-hover:text-white" />,
      title: "Secure & Private",
      description: "Your medical data remains encrypted & confidential.",
      borderColor: "border-purple-500",
      glowColor: "#8b5cf6"
    },
    {
      icon: <FaUserCheck className="text-5xl text-green-400 mx-auto group-hover:text-white" />,
      title: "User-Friendly",
      description: "Simple, intuitive interface for seamless experience.",
      borderColor: "border-green-500",
      glowColor: "#10b981"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const speed = 1.2;

    let interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
      <section className="relative bg-transparent text-white w-full min-h-[60vh] flex flex-col items-center text-center overflow-hidden">

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute h-40 w-40 rounded-full bg-pink-500/10 blur-xl top-1/4 left-1/4 animate-pulse" />
          <div className="absolute h-64 w-64 rounded-full bg-indigo-500/10 blur-xl bottom-1/4 right-1/4 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2a]/40 to-[#1a1a4f]/40" />
          <div className="absolute -inset-4 bg-purple-1200/20 rounded-3xl blur-2xl -z-10" />

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

        {/* Heading with Shimmer Effect */}
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Key Features
          </h2>
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-30 animate-shimmer" />
          </div>
        </div>
        <p className="text-lg text-gray-200 mt-4">Discover what makes our AI Diagnostic Assistant stand out</p>

        {/* Auto-Scrolling Features Cards */}
        <div ref={scrollContainerRef} className="flex overflow-x-hidden w-full mt-6 mb-0">
          <div className="flex gap-6 py-4 px-4">
            {features.concat(features).map((feature, index) => (
                <div key={index} className="glow-container">
                  <div
                      className={`card-content group flex-shrink-0 backdrop-blur-lg border ${feature.borderColor} text-white p-6 rounded-xl shadow-lg w-64 transition duration-300 cursor-pointer`}
                      style={{ '--glow-color': feature.glowColor }}
                  >
                    <div>{feature.icon}</div>
                    <h3 className="font-semibold text-xl mt-4">{feature.title}</h3>
                    <p className="text-gray-300 mt-2">{feature.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* CSS for Effects */}
        <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .glow-container {
          position: relative;
          padding: 3px;
          border-radius: 0.9em;
          transition: all 0.4s ease-in-out;
        }

        .glow-container::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 0.9em;
          z-index: -1;
          background: var(--glow-color);
          opacity: 0;
          transition: all 0.4s ease-in-out;
          filter: blur(0);
        }

        .glow-container:hover::before {
          opacity: 0.8;
          filter: blur(1.5em);
        }

        .card-content {
          position: relative;
          z-index: 2;
          background: rgba(10, 15, 36, 0.7);
          transition: all 0.4s ease-in-out;
        }

        .glow-container:hover .card-content {
          background: var(--glow-color);
          color: white;
        }

        .glow-container:hover .card-content svg {
          color: white !important;
        }

        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </section>
  );
};

export default Features;
