import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState("home");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path === "/home") setActiveMenuItem("home");
    else if (path === "/aidoctor") setActiveMenuItem("ai-doctor"); // Corrected
    else if (path === "/prescription") setActiveMenuItem("prescription-scan");
    else if (path === "/diagnosis") setActiveMenuItem("medical-report-scan"); // Corrected
  }, [location]);

  const handleNavigate = (route) => {
    setActiveMenuItem(route);

    // ✅ Ensure correct paths
    const pathMap = {
      "ai-doctor": "/aidoctor",  // Corrected
      "prescription-scan": "/prescription",
      "medical-report-scan": "/diagnosis",  // Corrected
    };

    navigate(pathMap[route]);
  };

  return (
      <div className="min-h-screen flex bg-gray-900 text-white">
        {/* 3D Animated Doctor Model on the Right */}
        <div className="w-1/2 h-screen flex justify-end items-center p-8">
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
              className="w-full h-full object-contain"
          ></model-viewer>
        </div>
        {/* Sidebar and Buttons */}
        <div className="w-1/2 h-screen p-8 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">Welcome to MediSync Pro</h1>
          <p className="text-gray-400 text-lg">Leverage AI for better healthcare insights, real-time medical diagnostics, and expert consultations.</p>

          <motion.button onClick={() => handleNavigate("ai-doctor")} whileHover={{ scale: 1.05 }} className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
            AI Doctor Consultation
          </motion.button>
          <motion.button onClick={() => handleNavigate("prescription-scan")} whileHover={{ scale: 1.05 }} className="bg-purple-600 text-white p-4 rounded-lg shadow-lg">
            Prescription Scan
          </motion.button>
          <motion.button onClick={() => handleNavigate("medical-report-scan")} whileHover={{ scale: 1.05 }} className="bg-red-600 text-white p-4 rounded-lg shadow-lg">
            Medical Report Scan
          </motion.button>
        </div>


      </div>
  );
};

export default Dashboard;
