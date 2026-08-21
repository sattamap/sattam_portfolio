import profileImage from "../assets/sattam_image.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center"
    >
      <div
        className="max-w-7xl mx-auto px-6 py-32 w-full
        flex flex-col-reverse lg:flex-row
        items-center gap-16"
      >
        {/* ================= LEFT CONTENT ================= */}

        <div className="flex-1 text-center lg:text-left">
          <p className="text-emerald-400 font-semibold text-lg mb-4">
            Hi, I'm Sattam
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Reliable
            <span className="block text-emerald-400">
              Virtual Assistant
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            I help businesses and busy professionals stay organized,
            productive, and focused by providing reliable virtual
            assistance and administrative support.
          </p>

          {/* ================= CTA BUTTONS ================= */}

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("#contact")}
              className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400
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
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div className="flex-1 flex justify-center relative">
          <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px]">

            {/* Glow behind image */}
            <div
              className="absolute inset-0 rounded-full
              bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-500
              blur-3xl opacity-30"
            />

            {/* Secondary glow */}
            <div
              className="absolute inset-8 rounded-full
              bg-emerald-400 blur-3xl opacity-20"
            />

            {/* Image */}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;