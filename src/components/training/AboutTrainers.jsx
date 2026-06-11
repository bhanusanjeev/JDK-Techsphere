import { motion } from "framer-motion";
import {
  FaUserTie,
  FaBriefcase,
  FaChalkboardTeacher,
  FaLightbulb,
} from "react-icons/fa";

const trainerBenefits = [
  {
    icon: <FaBriefcase />,
    title: "Industry Experience",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Practical Learning",
  },
  {
    icon: <FaUserTie />,
    title: "Mentorship Support",
  },
  {
    icon: <FaLightbulb />,
    title: "Latest Industry Trends",
  },
];

const AboutTrainers = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex px-5 py-2 rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-500 mb-6">
            About Our Trainers
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Learn From Professionals
            <span className="block text-orange-500 mt-2">
              With Real Industry Expertise
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Our trainers focus on practical understanding rather than
            memorization. Every session is designed to bridge the gap between
            theoretical concepts and real-world application, helping learners
            gain confidence and industry-ready skills.
          </p>
        </motion.div>

        {/* Top Divider */}
        <div className="flex items-center justify-center my-20">
          <div className="h-px w-32 md:w-64 bg-orange-200" />

          <div
            className="
              h-4
              w-4
              rounded-full
              bg-orange-500
              mx-5
              shadow-[0_0_25px_rgba(249,115,22,0.6)]
            "
          />

          <div className="h-px w-32 md:w-64 bg-orange-200" />
        </div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-orange-200
            bg-white
            px-12
            py-14
            md:px-16
            md:py-20
            shadow-[0_10px_35px_rgba(0,0,0,0.08)]
            hover:shadow-[0_0_50px_rgba(249,115,22,0.15)]
            transition-all
            duration-500
          "
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent" />

          <div className="relative z-10">
            <div className="text-7xl md:text-8xl font-bold text-orange-500/10 mb-4">
              5+
            </div>

            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              Years of Industry Experience
            </h3>

            <p className="mt-8 mb-12 text-lg text-gray-600 leading-relaxed max-w-5xl">
              Our trainers combine practical knowledge, industry exposure,
              and structured teaching methodologies to deliver impactful
              learning experiences. Every session is crafted to help learners
              understand concepts deeply, apply them effectively, and build
              the confidence required to succeed in professional environments.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainerBenefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-orange-200
                    bg-white
                    px-7
                    py-5
                    shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                    hover:border-orange-500
                    hover:-translate-y-1
                    hover:shadow-[0_0_35px_rgba(249,115,22,0.15)]
                    transition-all
                    duration-300
                  "
                >
                  <div className="text-orange-500 text-2xl">
                    {item.icon}
                  </div>

                  <span className="font-medium text-gray-800">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <div className="flex items-center justify-center mt-24">
          <div className="h-px w-32 md:w-64 bg-orange-200" />

          <div
            className="
              h-4
              w-4
              rounded-full
              bg-orange-500
              mx-5
              shadow-[0_0_25px_rgba(249,115,22,0.6)]
            "
          />

          <div className="h-px w-32 md:w-64 bg-orange-200" />
        </div>
      </div>
    </section>
  );
};

export default AboutTrainers;