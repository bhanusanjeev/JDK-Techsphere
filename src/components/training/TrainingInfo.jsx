import { motion } from "framer-motion";

const trainingSteps = [
  {
    number: "01",
    title: "Learn Fundamentals",
    description:
      "Build strong foundations through structured lessons covering concepts, tools, and industry practices.",
  },
  {
    number: "02",
    title: "Guided Practical Sessions",
    description:
      "Participate in trainer-led practical exercises designed to reinforce understanding through application.",
  },
  {
    number: "03",
    title: "Assessments & Feedback",
    description:
      "Track learning progress through quizzes, assignments, and constructive mentor feedback.",
  },
  {
    number: "04",
    title: "Project-Based Learning",
    description:
      "Apply acquired knowledge through practical implementations and guided mini-projects.",
  },
  {
    number: "05",
    title: "Certification & Completion",
    description:
      "Demonstrate proficiency and receive certification after successful completion of the training program.",
  },
];

const TrainingInfo = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <div className="inline-flex px-5 py-2 rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-500 mb-6">
            Training Methodology
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How We Deliver Training
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our training programs follow a structured learning process
            designed to help participants acquire knowledge, practice
            skills, and build confidence progressively.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-orange-200 -translate-x-1/2" />

          {trainingSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`
                relative
                flex
                items-center
                mb-20
                ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }
              `}
            >
              <div className="w-full md:w-[45%]">
                <div
                  className="
                    bg-white
                    border
                    border-orange-200
                    rounded-2xl
                    p-8
                    min-h-[260px]
                    text-center
                    flex
                    flex-col
                    justify-center
                    items-center
                    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    hover:border-orange-500
                    hover:-translate-y-2
                    hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]
                    transition-all
                    duration-300
                  "
                >
                  {/* Step Number */}
                  <div className="text-5xl font-bold text-orange-500/20 mb-4 text-center">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-center max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div
                className="
                  hidden
                  md:block
                  absolute
                  left-1/2
                  h-5
                  w-5
                  rounded-full
                  bg-orange-500
                  -translate-x-1/2
                  shadow-[0_0_20px_rgba(249,115,22,0.5)]
                "
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 flex items-center justify-center">
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

export default TrainingInfo;