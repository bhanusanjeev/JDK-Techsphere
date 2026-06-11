import { motion } from "framer-motion";
import founderImage from "../../assets/images/founder.jpg";

const FounderMessage = () => {
  return (
    <section className="bg-white py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex px-5 py-2 rounded-md border border-orange-600/30 bg-orange-600/10 text-orange-600 mb-6">
            Founder Message
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            A Message From
            <span className="block text-orange-600">
              Our Team
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div
              className="
                relative
                rounded-3xl
                overflow-hidden
                border
                border-orange-200
                bg-white
                p-3
                shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_0_50px_rgba(234,88,12,0.20)]
                transition-all
                duration-500
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-orange-600/5" />

             <img
  src={founderImage}
  alt="Team JDKTechsphere"
  className="
    relative
    z-10
    rounded-2xl
    w-full
    max-w-[650px]
    object-cover
    transition-all
    duration-500
    group-hover:scale-[1.02]
  "
/>
            </div>
          </motion.div>

          {/* Message */}
         <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div
    className="
      border-l-4
      border-orange-600
      pl-6
      mb-8
    "
  >
    <p className="text-xl italic text-gray-700">
      "Great achievements are built by great teams working toward a shared vision."
    </p>
  </div>

  <p className="text-gray-600 text-lg leading-relaxed">
    At JDKTechsphere, we believe that meaningful growth happens when
    passionate individuals come together with a common purpose —
    empowering learners and creating opportunities for success.
  </p>

  <p className="mt-5 text-gray-600 text-lg leading-relaxed">
    Our team works collaboratively to design industry-focused training
    programs, practical internships, mentorship initiatives, and
    technology solutions that help learners build real-world skills
    and confidence.
  </p>

  <p className="mt-5 text-gray-600 text-lg leading-relaxed">
    Every program we deliver is the result of collective expertise,
    innovation, and a commitment to quality. From planning learning
    experiences to guiding students throughout their journey, our team
    strives to create lasting impact and meaningful career growth.
  </p>

  <p className="mt-5 text-gray-600 text-lg leading-relaxed">
    Together, we are dedicated to bridging the gap between education
    and industry, ensuring that every learner receives the knowledge,
    support, and opportunities needed to thrive in today's evolving
    professional landscape.
  </p>

  {/* Signature */}
  <div className="mt-10">
    <h4 className="text-2xl font-bold text-gray-900">
      Team JDKTechsphere
    </h4>

    <p className="text-orange-600 font-medium mt-1">
      Empowering Learning • Building Careers • Creating Opportunities
    </p>
  </div>
</motion.div> 
  </div>
        {/* Divider */}
        <div className="flex items-center justify-center mt-28">
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

export default FounderMessage;