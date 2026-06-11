import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "Understanding your business goals, hiring needs, company culture, and workforce requirements.",
  },
  {
    number: "02",
    title: "Talent Sourcing",
    description:
      "Leveraging our talent network to identify qualified professionals matching your requirements.",
  },
  {
    number: "03",
    title: "Screening & Evaluation",
    description:
      "Conducting technical and professional assessments to ensure only top candidates move forward.",
  },
  {
    number: "04",
    title: "Interview Coordination",
    description:
      "Managing interview scheduling and communication to create a seamless hiring experience.",
  },
  {
    number: "05",
    title: "Successful Hiring",
    description:
      "Connecting organizations with exceptional talent and helping professionals find opportunities.",
  },
];

const HiringProcess = () => {
  return (
    
    <section className="pt-40 pb-32 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28"
        >

          <p
            className="
              text-orange-500
              uppercase
              tracking-[0.35em]
              font-semibold
            "
          >
            WHERE TALENT MEETS OPPORTUNITY
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-gray-900
              mt-5
            "
          >
            Our Proven Hiring Framework
          </h2>

          <p
            className="
              text-gray-600
              mt-6
              max-w-3xl
              mx-auto
              text-lg
              leading-8
            "
          >
            A structured recruitment approach that helps
            organizations hire smarter, faster, and with
            complete confidence.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
              hidden
              md:block
              absolute
              left-1/2
              top-0
              -translate-x-1/2
              h-full
              w-1
              bg-orange-500
            "
          />

          {processSteps.map((step, index) => (

            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`
                relative
                flex
                mb-24
                ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }
              `}
            >

              {/* Timeline Dot */}

              <div
                className="
                  hidden
                  md:block
                  absolute
                  left-1/2
                  top-24
                  -translate-x-1/2
                  w-8
                  h-8
                  rounded-full
                  bg-orange-500
                  border-4
                  border-white
                  shadow-lg
                "
              />

              {/* Card */}

              <div
                className="
                  w-full
                  md:w-[430px]
                  min-h-[280px]
                  bg-white
                  border
                  border-gray-200
                  rounded-3xl
                  p-10
                  shadow-lg
                  hover:shadow-2xl
                  hover:border-orange-500
                  hover:-translate-y-2
                  transition-all
                  duration-300

                  flex
                  flex-col
                  justify-center
                  items-center

                  text-center
                "
              >

                <span
                  className="
                    text-6xl
                    font-bold
                    text-orange-500
                  "
                >
                  {step.number}
                </span>

                <h3
                  className="
                    mt-6
                    text-3xl
                    font-bold
                    text-gray-900
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-6
                    text-gray-600
                    text-lg
                    leading-8
                  "
                >
                  {step.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
<div className="py-24 flex justify-center">
  <div className="relative flex items-center w-full max-w-4xl">

    <div className="flex-1 h-px bg-orange-100" />

    <div className="relative mx-8">
      <div className="absolute inset-0 bg-orange-500/30 blur-xl rounded-full" />

      <div className="relative w-4 h-4 bg-orange-500 rounded-full" />
    </div>

    <div className="flex-1 h-px bg-orange-100" />

  </div>
</div>
    </section>
  );
};

export default HiringProcess;