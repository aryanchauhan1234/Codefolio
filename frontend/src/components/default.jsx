import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BrainCircuit } from "lucide-react";
import Lottie from "lottie-react";
import visualAnimation from "../animations/visual.json"; // 👈 Make sure path is correct

const VisualizerPage = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      

      {/* Main Content */}
      <div className="flex-1 p-6 ">
        {!active ? (
          <motion.div
            className="text-center mt-10 text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Lottie
              animationData={visualAnimation}
              loop
              autoplay
              className="w-[3000px] sm:w-[400px] md:w-[450px] mb-[6%]"
            />
            <h1 className="text-4xl font-extrabold mb-4">
              Choose a <span className="text-orange-500">Visualizer</span>
            </h1>
            <p className="text-lg">Click an algorithm from the sidebar to begin.</p>
          </motion.div>
        ) : (
          <div className="p-4 border rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              {visualizers.find((v) => v.key === active)?.label} Visualizer
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Component for {active} will be rendered here.
            </p>
            {/* TODO: Render actual visualizer */}
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualizerPage;
