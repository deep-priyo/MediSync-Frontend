import { FaBrain, FaClock, FaShieldAlt, FaUserCheck } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Features = () => {
  const [activeCard, setActiveCard] = useState(null);
  const scrollContainerRef = useRef(null);
  
  const features = [
    {
      icon: <FaBrain className="text-5xl text-pink-400 mx-auto group-hover:text-white" />,
      title: "AI-Powered Analysis",
      description: "Uses deep learning to analyze reports accurately.",
      borderColor: "border-pink-500",
      glowColor: "#ec4899",
      hoverBg: "bg-pink-500"
    },
    {
      icon: <FaClock className="text-5xl text-blue-400 mx-auto group-hover:text-white" />,
      title: "Fast Diagnosis",
      description: "Get instant AI-generated medical insights.",
      borderColor: "border-blue-500",
      glowColor: "#3b82f6",
      hoverBg: "bg-blue-500"
    },
    {
      icon: <FaShieldAlt className="text-5xl text-purple-400 mx-auto group-hover:text-white" />,
      title: "Secure & Private",
      description: "Your medical data remains encrypted & confidential.",
      borderColor: "border-purple-500",
      glowColor: "#8b5cf6",
      hoverBg: "bg-purple-500"
    },
    {
      icon: <FaUserCheck className="text-5xl text-green-400 mx-auto group-hover:text-white" />,
      title: "User-Friendly",
      description: "Simple, intuitive interface for seamless experience.",
      borderColor: "border-green-500",
      glowColor: "#10b981",
      hoverBg: "bg-green-500"
    },
    // Duplicate features for continuous scrolling
    {
      icon: <FaBrain className="text-5xl text-pink-400 mx-auto group-hover:text-white" />,
      title: "AI-Powered Analysis",
      description: "Uses deep learning to analyze reports accurately.",
      borderColor: "border-pink-500",
      glowColor: "#ec4899",
      hoverBg: "bg-pink-500"
    },
    {
      icon: <FaClock className="text-5xl text-blue-400 mx-auto group-hover:text-white" />,
      title: "Fast Diagnosis",
      description: "Get instant AI-generated medical insights.",
      borderColor: "border-blue-500",
      glowColor: "#3b82f6",
      hoverBg: "bg-blue-500"
    },
    {
      icon: <FaShieldAlt className="text-5xl text-purple-400 mx-auto group-hover:text-white" />,
      title: "Secure & Private",
      description: "Your medical data remains encrypted & confidential.",
      borderColor: "border-purple-500",
      glowColor: "#8b5cf6",
      hoverBg: "bg-purple-500"
    },
    {
      icon: <FaUserCheck className="text-5xl text-green-400 mx-auto group-hover:text-white" />,
      title: "User-Friendly",
      description: "Simple, intuitive interface for seamless experience.",
      borderColor: "border-green-500",
      glowColor: "#10b981",
      hoverBg: "bg-green-500"
    }
  ];

  // Auto-scrolling effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const speed = 0.5;
    const cardWidth = 288; // Card width (256px) + gap (32px)
    const totalWidth = cardWidth * (features.length / 2);
    
    let interval;
    
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
        scrollAmount += speed;
        
        if (scrollAmount >= totalWidth) {
          scrollAmount = 0;
        }
      }
    };
    
    interval = setInterval(scroll, 20);
    
    const pauseScroll = () => {
      clearInterval(interval);
    };
    
    const resumeScroll = () => {
      clearInterval(interval);
      interval = setInterval(scroll, 20);
    };
    
    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);
    
    return () => {
      clearInterval(interval);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', pauseScroll);
        scrollContainer.removeEventListener('mouseleave', resumeScroll);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-[#0A0F24] text-white text-center overflow-hidden w-full">
      <div className="mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Key Features</h2>
        <p className="text-gray-400 mt-2 mb-8">Discover what makes our AI Diagnostic Assistant stand out</p>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-hidden w-full"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="flex gap-6 py-4 px-4">
          {features.map((feature, index) => (
            <div key={index} className="glow-container">
              <div
                className={`
                  card-content group flex-shrink-0 backdrop-blur-lg 
                  border ${feature.borderColor} text-white p-6 rounded-xl shadow-lg w-64
                  transition duration-300 cursor-pointer
                `}
                onClick={() => setActiveCard(index === activeCard ? null : index)}
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
      
      {/* Custom CSS for the glow effect */}
      <style jsx>{`
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

        /* Hide scrollbar */
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Features;