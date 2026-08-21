import { motion, type Variants } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaUserCheck,
  FaLightbulb,
} from "react-icons/fa";

import profileImage from "../assets/sattam_image.png";

const About = () => {
  /* ================= ANIMATIONS ================= */

  const containerVariant: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
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

  const imageVariant: Variants = {
    hidden: {
      opacity: 0,
      x: -40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  /* ================= SCROLL ================= */

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ================= SECTION HEADER ================= */}

        <motion.div
          variants={itemVariant}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-emerald-600 font-semibold mb-3">
            Get to Know Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
            About Me
          </h2>

          <p className="text-slate-600 leading-relaxed">
            A reliable and organized virtual assistant focused on helping
            businesses and professionals work more efficiently.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= IMAGE ================= */}

          <motion.div
            variants={imageVariant}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Decorative background */}

              <div
                className="absolute -inset-4
                bg-linear-to-tr from-emerald-400/20
                via-teal-400/10 to-cyan-400/20
                rounded-3xl rotate-3"
              />

              {/* Image card */}

              <div
                className="relative
                w-72 h-80
                md:w-80 md:h-96
                overflow-hidden
                rounded-3xl
                border border-slate-200
                shadow-xl"
              >
                <img
                  src={profileImage}
                  alt="Sattam Chakma - Virtual Assistant"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </motion.div>

          {/* ================= TEXT CONTENT ================= */}

          <motion.div
            variants={containerVariant}
            className="text-center lg:text-left"
          >
            <motion.h3
              variants={itemVariant}
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-5"
            >
              Hi, I'm Sattam.
            </motion.h3>

            <motion.p
              variants={itemVariant}
              className="text-slate-600 leading-relaxed mb-5"
            >
              I am a dedicated virtual assistant who helps businesses,
              entrepreneurs, and busy professionals stay organized and
              productive.
            </motion.p>

            <motion.p
              variants={itemVariant}
              className="text-slate-600 leading-relaxed mb-8"
            >
              From administrative tasks and data management to online
              research, communication, and AI-assisted workflows, I focus on
              providing dependable support so my clients can spend more time
              focusing on their core work.
            </motion.p>

            {/* ================= STRENGTHS ================= */}

            <motion.div
              variants={itemVariant}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500 shrink-0" />
                <span className="text-slate-700">
                  Detail-oriented
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-emerald-500 shrink-0" />
                <span className="text-slate-700">
                  Time-conscious
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaUserCheck className="text-emerald-500 shrink-0" />
                <span className="text-slate-700">
                  Reliable & responsible
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaLightbulb className="text-emerald-500 shrink-0" />
                <span className="text-slate-700">
                  Quick learner
                </span>
              </div>
            </motion.div>

            {/* ================= CTA ================= */}

            <motion.div variants={itemVariant}>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center
                rounded-full
                bg-linear-to-r from-cyan-400 to-emerald-400
                px-7 py-3
                font-semibold text-white
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              >
                Let's Work Together
              </button>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;