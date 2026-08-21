import { motion, type Variants } from "framer-motion";
import {
  FaGoogle,
  FaMicrosoft,
  FaFileExcel,
  FaSlack,
  FaTrello,
  FaRobot,
  FaPaintBrush,
  FaTasks,
  FaCalendarAlt,
  FaEnvelope,
  FaVideo,
  FaCheckCircle,
  FaBrain,
} from "react-icons/fa";

type Tool = {
  name: string;
  icon: React.ReactNode;
};

type ToolCategory = {
  title: string;
  description: string;
  tools: Tool[];
};

const toolCategories: ToolCategory[] = [
  /* ================= OFFICE & PRODUCTIVITY ================= */

  {
    title: "Office & Productivity",
    description:
      "Tools I use for documents, spreadsheets, email, file organization, and everyday administrative work.",
    tools: [
      {
        name: "Google Workspace",
        icon: <FaGoogle />,
      },
      {
        name: "Microsoft Office",
        icon: <FaMicrosoft />,
      },
      {
        name: "Excel",
        icon: <FaFileExcel />,
      },
      {
        name: "Gmail",
        icon: <FaEnvelope />,
      },
      {
        name: "Google Calendar",
        icon: <FaCalendarAlt />,
      },
    ],
  },

  /* ================= PROJECT MANAGEMENT ================= */

  {
    title: "Project & Task Management",
    description:
      "Tools for organizing projects, tracking tasks, managing workflows, and collaborating with teams.",
    tools: [
      {
        name: "Notion",
        icon: <FaTasks />,
      },
      {
        name: "ClickUp",
        icon: <FaTasks />,
      },
      {
        name: "Trello",
        icon: <FaTrello />,
      },
      {
        name: "Slack",
        icon: <FaSlack />,
      },
    ],
  },

  /* ================= COMMUNICATION & SCHEDULING ================= */

  {
    title: "Communication & Scheduling",
    description:
      "Tools I use to coordinate meetings, communicate with clients, and keep schedules organized.",
    tools: [
      {
        name: "Calendly",
        icon: <FaCalendarAlt />,
      },
      {
        name: "Zoom",
        icon: <FaVideo />,
      },
      {
        name: "Slack",
        icon: <FaSlack />,
      },
      {
        name: "Gmail",
        icon: <FaEnvelope />,
      },
    ],
  },

  /* ================= DESIGN & CONTENT ================= */

  {
    title: "Design & Content",
    description:
      "Tools for creating simple visual content, presentations, social media materials, and client documents.",
    tools: [
      {
        name: "Canva",
        icon: <FaPaintBrush />,
      },
      {
        name: "Content Support",
        icon: <FaTasks />,
      },
    ],
  },

  /* ================= AI TOOLS ================= */

  {
    title: "AI & Smart Productivity",
    description:
      "AI-powered tools that help improve research, content workflows, productivity, and repetitive tasks.",
    tools: [
      {
        name: "ChatGPT",
        icon: <FaBrain />,
      },
      {
        name: "AI Research",
        icon: <FaRobot />,
      },
      {
        name: "AI Content Support",
        icon: <FaRobot />,
      },
    ],
  },

  /* ================= RESEARCH & DATA ================= */

  {
    title: "Research & Data",
    description:
      "Tools and workflows for data entry, online research, information gathering, and spreadsheet management.",
    tools: [
      {
        name: "Web Research",
        icon: <FaGoogle />,
      },
      {
        name: "Data Entry",
        icon: <FaFileExcel />,
      },
      {
        name: "Google Sheets",
        icon: <FaFileExcel />,
      },
      {
        name: "Online Research",
        icon: <FaGoogle />,
      },
    ],
  },
];

const Skills = () => {
  /* ================= ANIMATIONS ================= */

  const containerVariant: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 25,
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

  return (
    <section
      id="skills"
      className="bg-slate-50 py-24"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {/* ================= SECTION HEADER ================= */}

        <motion.div
          variants={itemVariant}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-emerald-600 font-semibold mb-3">
            Tools I Work With
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
            Skills & Tools
          </h2>

          <p className="text-slate-600 leading-relaxed">
            I use a variety of productivity, communication, project
            management, design, and AI-powered tools to provide
            efficient and reliable virtual assistance.
          </p>
        </motion.div>

        {/* ================= TOOL CATEGORIES ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariant}
              className="group bg-white rounded-2xl
              border border-slate-200
              p-7
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:border-emerald-300"
            >
              {/* CATEGORY TITLE */}

              <h3
                className="text-xl font-bold
                text-slate-900 mb-3"
              >
                {category.title}
              </h3>

              {/* CATEGORY DESCRIPTION */}

              <p
                className="text-slate-600
                text-sm leading-relaxed mb-6"
              >
                {category.description}
              </p>

              {/* TOOLS */}

              <div className="flex flex-wrap gap-3">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2
                    rounded-full
                    bg-slate-100
                    px-3 py-2
                    text-sm font-medium
                    text-slate-700
                    transition-all duration-300
                    hover:bg-emerald-50
                    hover:text-emerald-600"
                  >
                    <span
                      className="text-lg
                      text-emerald-500
                      transition-colors
                      group-hover:text-emerald-600"
                    >
                      {tool.icon}
                    </span>

                    {tool.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          variants={itemVariant}
          className="mt-12 text-center"
        >
          <div
            className="inline-flex items-center gap-2
            rounded-full
            bg-emerald-50
            border border-emerald-100
            px-5 py-3"
          >
            <FaCheckCircle className="text-emerald-500" />

            <p className="text-sm text-emerald-700 font-medium">
              Comfortable learning new tools and adapting to
              different client workflows.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;