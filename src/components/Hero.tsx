import { motion, type Variants } from "framer-motion";
import {
  FaGoogle,
  FaFileExcel,
  FaMicrosoft,
  FaSlack,
  FaTasks,
  FaComments,
  FaPaintBrush,
  FaRobot,
} from "react-icons/fa";

import profileImage from "../assets/sattam_image.png";
type FloatingTool = {
  icon: React.ReactNode;
  name: string;
  top: string;
  left: string;
  duration: number;
};

const floatingTools: FloatingTool[] = [
  {
    icon: <FaGoogle className="text-blue-400" />,
    name: "Google Workspace",
    top: "8%",
    left: "15%",
    duration: 6,
  },
  {
    icon: <FaMicrosoft className="text-blue-500" />,
    name: "Microsoft Office",
    top: "20%",
    left: "72%",
    duration: 7,
  },
  {
    icon: <FaFileExcel className="text-green-500" />,
    name: "Excel",
    top: "45%",
    left: "5%",
    duration: 5.5,
  },
  {
    icon: <FaPaintBrush className="text-cyan-400" />,
    name: "Canva",
    top: "65%",
    left: "75%",
    duration: 6.5,
  },
  {
    icon: <FaTasks className="text-white" />,
    name: "Task Management",
    top: "75%",
    left: "15%",
    duration: 7.5,
  },
  {
    icon: <FaSlack className="text-pink-400" />,
    name: "Slack",
    top: "40%",
    left: "82%",
    duration: 6,
  },
  {
    icon: <FaComments className="text-purple-400" />,
    name: "Communication",
    top: "5%",
    left: "55%",
    duration: 7,
  },
  {
    icon: <FaRobot className="text-emerald-400" />,
    name: "AI Tools",
    top: "82%",
    left: "55%",
    duration: 6.5,
  },
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  /* ================= ENTRANCE ANIMATIONS ================= */

  const textVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const nameVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariant: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
      y: 30,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.5,
      },
    },
  };

  const containerVariant: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center"
    >
      <motion.div
        className="max-w-6xl mx-auto px-12 py-32 w-full
        flex flex-col-reverse lg:flex-row
        items-center gap-6 lg:gap-10"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* ================= LEFT CONTENT ================= */}

        <div className="flex-1 lg:max-w-2xl text-center lg:text-left">
          <motion.p
            variants={textVariant}
            className="text-emerald-400 font-semibold text-lg mb-4"
          >
            Hi, I'm Sattam
          </motion.p>

          <motion.h1
            variants={textVariant}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Your Reliable
            <motion.span
              variants={nameVariant}
              className="block text-emerald-400"
            >
              Virtual Assistant
            </motion.span>
          </motion.h1>

          <motion.p
            variants={textVariant}
            className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            I help businesses and busy professionals stay organized, productive,
            and focused by providing reliable virtual assistance and
            administrative support.
          </motion.p>

          {/* ================= CTA BUTTONS ================= */}

          <motion.div
            variants={textVariant}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollToSection("#contact")}
              className="rounded-full bg-linear-to-r from-cyan-400 to-emerald-400
              px-7 py-3 font-semibold text-white
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]"
            >
              Hire Me
            </button>

            <button
              onClick={() => scrollToSection("#services")}
              className="rounded-full border border-slate-500
              px-7 py-3 font-semibold text-slate-200
              transition-all duration-300
              hover:border-emerald-400
              hover:text-emerald-400"
            >
              View My Services
            </button>
          </motion.div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <motion.div
          variants={imageVariant}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative w-75 h-75 md:w-[380px] md:h-[380px]">
            {/* ================= GLOW ================= */}

            <div
              className="absolute inset-0 rounded-full
              bg-linear-to-tr from-emerald-400 via-teal-400 to-cyan-500
              blur-3xl opacity-30"
            />

            <div
              className="absolute inset-8 rounded-full
              bg-emerald-400 blur-3xl opacity-20"
            />

            {/* ================= FLOATING TOOLS ================= */}

            {floatingTools.map((tool) => (
              <motion.div
                key={tool.name}
                className="absolute z-20 text-2xl md:text-3xl"
                style={{
                  top: tool.top,
                  left: tool.left,
                }}
                animate={{
                  y: [0, -10, 0],
                  x: [0, 6, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: tool.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                title={tool.name}
              >
                {tool.icon}
              </motion.div>
            ))}

            {/* ================= PROFILE IMAGE ================= */}

            <img
              src={profileImage}
              alt="Sattam Chakma - Virtual Assistant"
              className="relative z-10 mx-auto
              w-60 h-60 md:w-72 md:h-72
              object-cover rounded-full
              border-4 border-white
              shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
