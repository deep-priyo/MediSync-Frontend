import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state for entrance animations
    setTimeout(() => setIsLoaded(true), 300);

    const path = location.pathname;
    if (path === "/" || path === "/home") setActiveMenuItem("home");
    else if (path === "/aidoctor") setActiveMenuItem("ai-doctor");
    else if (path === "/prescription") setActiveMenuItem("prescription-scan");
    else if (path === "/diagnosis") setActiveMenuItem("medical-report-scan");
  }, [location]);

  const handleNavigate = (route) => {
    setActiveMenuItem(route);

    const pathMap = {
      "ai-doctor": "/aidoctor",
      "prescription-scan": "/prescription",
      "medical-report-scan": "/diagnosis",
      "home": "/"
    };

    navigate(pathMap[route] || "/");
  };

  return (
      <div className="min-h-screen flex bg-gray-900 text-white overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-black opacity-80"></div>

          {/* Dynamic grid particles */}
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Animated floating orbs */}
          {[...Array(20)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute rounded-full bg-blue-500/10"
                  style={{
                    width: Math.random() * 200 + 50,
                    height: Math.random() * 200 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
              />
          ))}

          {/* DNA helix animation in the background */}
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-[80vh] w-20 opacity-20">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-blue-500"
                    style={{ top: `${i * 5}%`, left: `${i % 2 === 0 ? '0%' : '80%'}` }}
                    animate={{
                      x: i % 2 === 0 ? [0, 20, 0] : [0, -20, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity
                    }}
                />
            ))}
            {[...Array(14)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute h-px bg-blue-400"
                    style={{
                      top: `${i * 5 + 2.5}%`,
                      width: '80%',
                      transformOrigin: i % 2 === 0 ? 'left' : 'right',
                      left: i % 2 === 0 ? '0%' : '20%'
                    }}
                    animate={{
                      rotate: i % 2 === 0 ? [0, 15, 0] : [0, -15, 0],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity
                    }}
                />
            ))}
          </div>
        </div>

        {/* 3D Animated Doctor Model with entrance animation */}
        <motion.div
            className="w-2/5 h-screen flex items-center justify-center pl-12 z-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isLoaded ? 0 : -100, opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          <model-viewer
              src="/assets/doctor.glb"
              alt="Animated 3D Doctor Model"
              auto-rotate
              autoplay
              animation-name="Idle"
              animation-loop
              camera-controls
              touch-action="pan-y"
              shadow-intensity="1"
              exposure="1.5"
              environment-image="neutral"
              className="w-full h-full object-contain scale-110"
          ></model-viewer>
        </motion.div>

        {/* Content Area with staggered entrance animations */}
        <motion.div
            className="w-3/5 h-screen p-8 flex flex-col justify-center items-center pr-12 z-10"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: isLoaded ? 0 : 100, opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-xl">
            {/* Enhanced MEDISYNC PRO heading with advanced text effects */}
            <div className="relative mb-8">
              {/* Text outline/glow effect */}
              <motion.div
                  className="absolute inset-0 blur-sm opacity-80"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(101, 163, 255, 0.5)",
                    fontSize: "6rem",
                    fontWeight: "800",
                    letterSpacing: "0.2em",
                    lineHeight: 1.1,
                  }}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
              >
                MEDISYNC PRO
              </motion.div>

              {/* Main text container */}
              <motion.h1
                  className="text-6xl font-extrabold tracking-widest text-white relative"
                  style={{
                    textShadow: "0 0 20px rgba(255, 255, 255, 0.4)"
                  }}
              >
                {/* Letter-by-letter animation */}
                <span className="relative inline-block overflow-hidden">
                {"MEDISYNC PRO".split('').map((letter, index) => (
                    <motion.span
                        key={index}
                        className="inline-block relative"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: isLoaded ? 0 : -20, opacity: isLoaded ? 1 : 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.05,
                          type: "spring",
                          stiffness: 100
                        }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
              </span>

                {/* Horizontal glowing line below text */}
                <motion.span
                    className="block h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-2"
                    style={{ width: '100%' }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                      scaleX: isLoaded ? 1 : 0,
                      opacity: isLoaded ? [0.5, 1, 0.5] : 0
                    }}
                    transition={{
                      duration: 2,
                      delay: 1.2,
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror"
                      }
                    }}
                />
              </motion.h1>

              {/* Focused shine effect sweeping across the text */}
              <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 55%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "6rem",
                    fontWeight: "800",
                    letterSpacing: "0.2em",
                    lineHeight: 1.1,
                    mixBlendMode: "overlay"
                  }}
                  animate={{
                    backgroundPosition: ["-100% 0%", "200% 0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
              >
                MEDISYNC PRO
              </motion.div>

              {/* Pulsing medical cross symbol */}
              <motion.div
                  className="absolute -top-1 -right-12 text-blue-500 opacity-80"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-4v4h-6v-4h-4v6h4v6h-4v6h4v-4h6v4h4v-6h-4v-6h4z"/>
                </svg>
              </motion.div>
            </div>

            {/* Animated subtitle with typing effect */}
            <div className="h-16 mb-8">
              <motion.p
                  className="text-gray-300 text-lg font-light inline-block relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
              >
                Leverage AI for
                <motion.span
                    className="inline-block mx-1 text-blue-400 font-medium"
                    animate={{
                      opacity: [1, 1, 1, 1, 0, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 10,
                      times: [0, 0.7, 0.75, 0.8, 0.85, 0.9]
                    }}
                >
                  <motion.span
                      animate={{
                        content: ["better healthcare", "real-time diagnostics", "expert consultations", "medical insights"]
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      style={{
                        display: "inline-block",
                        minWidth: "180px"
                      }}
                  >
                    better healthcare
                  </motion.span>
                </motion.span>
                <motion.span
                    className="inline-block w-1 h-4 bg-blue-400 ml-1 align-middle"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.p>
            </div>

            {/* Interactive Feature Buttons with staggered animation */}
            <div className="space-y-6">
              {/* AI Doctor Button */}
              <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <button
                    onClick={() => handleNavigate("ai-doctor")}
                    className="relative w-full flex items-center justify-between bg-gray-800 text-white px-6 py-5 rounded-lg border border-blue-500/30 backdrop-blur-sm"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20 mr-5">
                      <motion.div
                          className="w-7 h-7 rounded-full bg-blue-500"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-lg">AI Doctor Consultation</p>
                      <p className="text-xs text-gray-400">Advanced diagnostic assistance</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full blur-sm bg-blue-500/30"></div>
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-blue-500/50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
              </motion.div>

              {/* Prescription Scan Button */}
              <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-fuchsia-400 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <button
                    onClick={() => handleNavigate("prescription-scan")}
                    className="relative w-full flex items-center justify-between bg-gray-800 text-white px-6 py-5 rounded-lg border border-purple-500/30 backdrop-blur-sm"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/20 mr-5">
                      <motion.div
                          className="absolute w-8 h-8"
                          animate={{
                            background: [
                              "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0) 70%)",
                              "radial-gradient(circle, rgba(168,85,247,0.8) 30%, rgba(168,85,247,0) 100%)",
                              "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0) 70%)"
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                      />
                      <div className="w-5 h-5 rounded bg-purple-500" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-lg">Prescription Scan</p>
                      <p className="text-xs text-gray-400">Instant medication analysis</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full blur-sm bg-purple-500/30"></div>
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-purple-500/50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
              </motion.div>

              {/* Medical Report Scan Button */}
              <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-400 to-red-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <button
                    onClick={() => handleNavigate("medical-report-scan")}
                    className="relative w-full flex items-center justify-between bg-gray-800 text-white px-6 py-5 rounded-lg border border-red-500/30 backdrop-blur-sm"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500/20 mr-5">
                      <motion.div
                          className="w-8 h-8 grid grid-cols-2 gap-1"
                          animate={{ rotate: [0, 180, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                        <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      </motion.div>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-lg">Medical Report Scan</p>
                      <p className="text-xs text-gray-400">Comprehensive health analytics</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full blur-sm bg-red-500/30"></div>
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-red-500/50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
              </motion.div>
            </div>

            {/* Floating version indicator */}
            <motion.div
                className="absolute bottom-4 right-4 text-xs text-blue-400/60 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 0.6 : 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5 animate-pulse"></div>
              <span>v2.7.3</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
  );
};

export default Dashboard;