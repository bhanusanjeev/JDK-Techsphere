import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-48 px-6"
      style={{
        background:
          "radial-gradient(circle at center, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.03) 40%, #f8fafc 80%)",
      }}
    >
      {/* Glow Effects */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[140px]" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex px-5 py-2 rounded-md border border-orange-600/30 bg-orange-600/10 text-orange-600 mb-8"
        >
          Empowering Future Professionals
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
        >
          Bridging Education
          <span className="block text-orange-600">
            With Industry
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          JDKTechsphere is a technology-driven organization committed
          to empowering students, graduates, and aspiring professionals
          through practical training, internships, mentorship, and
          industry-focused learning experiences.

          <br />
          <br />

          Our mission is to help individuals develop real-world skills,
          build confidence, and create meaningful career opportunities
          in today's rapidly evolving technology landscape.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            "Training Programs",
            "Internship Opportunities",
            "Industry Mentorship",
            "Career Development",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-2xl
                border
                border-orange-200
                bg-white
                p-6
                shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                hover:border-orange-600
                hover:shadow-[0_0_30px_rgba(234,88,12,0.15)]
                transition-all
                duration-300
              "
            >
              <p className="font-semibold text-gray-800">
                {item}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Section Divider */}
        <div className="flex items-center justify-center mt-24">
          <div className="h-px w-32 md:w-72 bg-orange-200" />

          <div
            className="
              h-4
              w-4
              rounded-full
              bg-orange-600
              mx-5
              shadow-[0_0_25px_rgba(234,88,12,0.5)]
            "
          />

          <div className="h-px w-32 md:w-72 bg-orange-200" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;