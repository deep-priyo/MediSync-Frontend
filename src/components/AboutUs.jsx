import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-[#0A0F24] text-white text-center">
      <h2 className="text-4xl font-bold neon-glow">About Us</h2>
      <p className="text-gray-400 mt-2">Empowering healthcare with AI-driven diagnostics</p>

      <div className="mt-10 max-w-4xl mx-auto bg-transparent backdrop-blur-md p-8 rounded-xl shadow-lg neon-border">
        <p className="text-lg text-gray-200 leading-relaxed animated-text">
          Our AI-powered diagnostic assistant helps users analyze medical reports with cutting-edge technology. 
          By leveraging deep learning and natural language processing, we aim to provide fast, accurate, 
          and reliable insights, empowering users with better healthcare decisions.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            AI-Powered
          </span>
          <span className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Trusted by Experts
          </span>
          <span className="bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Secure & Private
          </span>
        </div>
      </div>

      {/* Custom CSS for the animated text and neon border */}
      <style jsx>{`
        .animated-text {
          background-image: linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.8) 100%
          );
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: shine 4s linear infinite;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }

        .neon-border {
          position: relative;
          border: 2px solid #ec4899;
          box-shadow: 0 0 10px #ec4899, 0 0 20px #ec4899, inset 0 0 10px rgba(236, 72, 153, 0.5);
          animation: neon-pulse 1.5s infinite alternate;
        }

        @keyframes neon-pulse {
          from {
            box-shadow: 0 0 10px #ec4899, 0 0 20px #ec4899, inset 0 0 10px rgba(236, 72, 153, 0.5);
          }
          to {
            box-shadow: 0 0 15px #ec4899, 0 0 30px #ec4899, inset 0 0 15px rgba(236, 72, 153, 0.7);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;