import { motion } from "framer-motion";
import {
  FaDatabase,
  FaCode,
  FaPython,
  FaBrain,
  FaRobot,
  FaCloud,
} from "react-icons/fa";

const internships = [
  {
    icon: <FaDatabase />,
    title: "Data Engineering",
    description:
      "Learn ETL pipelines, data warehousing, SQL, cloud data platforms, and modern data workflows.",
  },
  {
    icon: <FaCode />,
    title: "Full Stack Development",
    description:
      "Build complete web applications using modern frontend, backend, and database technologies.",
  },
  {
    icon: <FaPython />,
    title: "Python Development",
    description:
      "Master Python fundamentals, automation, APIs, scripting, and backend development.",
  },
  {
    icon: <FaBrain />,
    title: "AI & Machine Learning",
    description:
      "Work with machine learning models, data preprocessing, prediction systems, and AI applications.",
  },
  {
    icon: <FaRobot />,
    title: "Agentic AI",
    description:
      "Build autonomous AI agents, workflows, multi-agent systems, and real-world AI automation.",
  },
  {
    icon: <FaCloud />,
    title: "Azure Cloud",
    description:
      "Deploy applications, manage cloud infrastructure, storage services, and Azure solutions.",
  },
];

const InternshipCategories = () => {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-32 px-6"
      style={{
        background:
          "radial-gradient(circle at center, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.03) 40%, #f8fafc 80%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm mb-6">
            Internship Domains
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore Our Internship Programs
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Gain practical experience through industry-oriented projects,
            expert mentorship, and hands-on learning across emerging
            technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-orange-200
                bg-white
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-3
                hover:border-orange-500
                hover:shadow-[0_20px_50px_rgba(249,115,22,0.18)]
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-orange-500/10
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  z-10
                  h-16
                  w-16
                  mx-auto
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-orange-500/10
                  text-orange-500
                  text-2xl
                  mb-6
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 leading-relaxed min-h-[120px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-24 flex justify-center">
          <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default InternshipCategories;