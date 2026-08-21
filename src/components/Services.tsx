import {
  FaCalendarAlt,
  FaTasks,
  FaFileExcel,
  FaSearch,
  FaShareAlt,
  FaRobot,
} from "react-icons/fa";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: <FaCalendarAlt />,
    title: "Administrative Support",
    description:
      "Email management, calendar scheduling, data entry, document organization, and everyday administrative tasks.",
  },
  {
    icon: <FaTasks />,
    title: "Executive Assistance",
    description:
      "Reliable support with meeting coordination, task management, travel planning, and day-to-day operations.",
  },
  {
    icon: <FaFileExcel />,
    title: "Data & Spreadsheet Management",
    description:
      "Accurate data entry, spreadsheet organization, data cleaning, reporting, and document management.",
  },
  {
    icon: <FaSearch />,
    title: "Web Research",
    description:
      "Thorough online research, information gathering, competitor research, and lead research.",
  },
  {
    icon: <FaShareAlt />,
    title: "Social Media Support",
    description:
      "Content scheduling, basic Canva design, social media assistance, and content organization.",
  },
  {
    icon: <FaRobot />,
    title: "AI-Powered Assistance",
    description:
      "Use of modern AI tools to improve research, content workflows, productivity, and repetitive tasks.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-emerald-600 font-semibold mb-3">
            What I Can Do
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
            Virtual Assistant Services
          </h2>

          <p className="text-slate-600 leading-relaxed">
            I provide reliable virtual assistance to help businesses
            stay organized, productive, and focused on what matters most.
          </p>
        </div>

        {/* SERVICES GRID */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8
              border border-slate-200
              shadow-sm
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-emerald-300"
            >

              {/* ICON */}

              <div
                className="w-14 h-14 rounded-xl
                bg-emerald-50
                text-emerald-500
                flex items-center justify-center
                text-2xl
                mb-6
                transition-all duration-300
                group-hover:bg-emerald-500
                group-hover:text-white"
              >
                {service.icon}
              </div>

              {/* TITLE */}

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;