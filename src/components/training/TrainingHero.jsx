import { motion } from "framer-motion";

const TrainingHero = () => {
  return (
    <section
      className="relative overflow-hidden py-32 px-6"
      style={{
        background:
          "radial-gradient(circle at center, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.03) 40%, #f8fafc 80%)",
      }}
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[140px]" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex px-5 py-2 rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-500 mb-6">
              Industry-Focused Training Programs
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
              Master
              <span className="block text-orange-500">
                In-Demand Skills
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
              Training is a structured learning experience designed to help
              learners acquire new skills, tools, and methodologies through
              guided instruction, hands-on practice, and assessments.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              "Structured Learning",
              "Hands-On Practice",
              "Skill Assessments",
              "Certification",
            ].map((item) => (
              <div
                key={item}
                className="
                  bg-white
                  border
                  border-orange-200
                  rounded-md
                  p-8
                  text-center
                  shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                  hover:border-orange-500
                  hover:-translate-y-2
                  hover:shadow-[0_0_40px_rgba(249,115,22,0.20)]
                  transition-all
                  duration-300
                "
              >
                <h3 className="font-semibold text-gray-900">
                  {item}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;