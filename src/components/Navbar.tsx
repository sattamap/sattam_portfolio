import { useEffect, useState } from "react";

/* ================= LOGO ================= */

interface LogoProps {
  scrolled: boolean;
}

const VALogo = ({ scrolled }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-10 h-10 transition-colors duration-300 ${
      scrolled ? "text-emerald-500" : "text-emerald-400"
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {/* Professional / productivity style icon */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9c0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

/* ================= NAVBAR ================= */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Scroll state */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Close mobile menu when window becomes desktop-sized */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* Scroll to a section */
  const handleScrollTo = (id: string) => {
    setMobileOpen(false);

    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* Scroll to top */
  const scrollToTop = () => {
    setMobileOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-md"
          : "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* ================= LOGO ================= */}

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2"
          aria-label="Go to homepage"
        >
          <VALogo scrolled={scrolled} />

          <div className="text-left">
            <span
              className={`block font-bold text-xl tracking-wide transition-colors ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Sattam
            </span>

            <span
              className={`block text-xs transition-colors ${
                scrolled ? "text-slate-500" : "text-slate-300"
              }`}
            >
              Virtual Assistant
            </span>
          </div>
        </button>

        {/* ================= DESKTOP MENU ================= */}

        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <button
              onClick={scrollToTop}
              className={`font-medium transition ${
                scrolled
                  ? "text-emerald-500"
                  : "text-emerald-400"
              }`}
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollTo("#services")}
              className={`font-medium transition ${
                scrolled
                  ? "text-slate-700 hover:text-emerald-600"
                  : "text-slate-200 hover:text-cyan-400"
              }`}
            >
              Services
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollTo("#about")}
              className={`font-medium transition ${
                scrolled
                  ? "text-slate-700 hover:text-emerald-600"
                  : "text-slate-200 hover:text-cyan-400"
              }`}
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollTo("#skills")}
              className={`font-medium transition ${
                scrolled
                  ? "text-slate-700 hover:text-emerald-600"
                  : "text-slate-200 hover:text-cyan-400"
              }`}
            >
              Tools
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollTo("#portfolio")}
              className={`font-medium transition ${
                scrolled
                  ? "text-slate-700 hover:text-emerald-600"
                  : "text-slate-200 hover:text-cyan-400"
              }`}
            >
              Portfolio
            </button>
          </li>
        </ul>

        {/* ================= DESKTOP CTA ================= */}

        <button
          onClick={() => handleScrollTo("#contact")}
          className="hidden lg:inline-flex items-center gap-2 rounded-full
          bg-linear-to-r from-cyan-400 to-emerald-400
          px-6 py-2 text-white font-semibold
          transition-all
          hover:scale-105
          hover:shadow-[0_0_15px_rgba(16,185,129,0.7)]"
        >
          Hire Me
        </button>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <div className="lg:hidden relative">
          <button
            onClick={() => setMobileOpen((previous) => !previous)}
            className="p-2 rounded-md hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* ================= MOBILE MENU ================= */}

          {mobileOpen && (
            <ul
              className="absolute right-0 mt-3 p-4 w-56
              bg-white/95 backdrop-blur-xl
              rounded-xl shadow-lg z-50"
            >
              <li>
                <button
                  onClick={scrollToTop}
                  className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollTo("#services")}
                  className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollTo("#about")}
                  className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollTo("#skills")}
                  className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600"
                >
                  Tools
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollTo("#portfolio")}
                  className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600"
                >
                  Portfolio
                </button>
              </li>

              <li className="mt-3">
                <button
                  onClick={() => handleScrollTo("#contact")}
                  className="bg-linear-to-r from-cyan-400 to-emerald-400
                  text-white rounded-md py-2 w-full
                  font-semibold"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;