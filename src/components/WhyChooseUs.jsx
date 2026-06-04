import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import whyChooseImage from "../assets/images/whychoose.png";

const WhyChooseUs = () => {
  return (
    <section className="min-h-[90vh] py-20 px-6 lg:px-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Orange Glow */}

            <div
              className="
                absolute
                w-[600px]
                h-[600px]
                bg-orange-400/20
                blur-[150px]
                rounded-full
              "
            />

            <motion.img
              src={whyChooseImage}
              alt="Why Choose JDKTechsphere"
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                w-full
                max-w-[700px]
                object-contain
              "
            />
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange-500 font-semibold uppercase tracking-[4px]">
              Why Choose Us
            </p>

            <h2
              className="
                mt-5
                text-3xl
                md:text-4xl
                xl:text-[52px]
                font-bold
                leading-[1.15]
                text-gray-900
              "
            >
              Building Careers.
              <br />
              Empowering Businesses.
            </h2>

            <p className="mt-6 text-base md:text-lg leading-8 text-gray-600 max-w-xl">
              At JDKTechsphere, we connect students and professionals
              with opportunities that accelerate growth while helping
              organizations find the right talent and resources.
            </p>

            {/* Points */}

            <div className="mt-8 space-y-4">
              {[
                "Industry Expert Mentors",
                "Real-Time Project Exposure",
                "Internship & Placement Assistance",
                "Corporate Hiring Network",
                "Career Guidance & Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <HiCheckCircle
                    className="text-orange-500 flex-shrink-0"
                    size={24}
                  />

                  <span className="text-gray-700 text-base md:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}

            <button
              className="
                mt-10
                flex
                items-center
                justify-center
                bg-orange-500
                hover:bg-orange-600
                text-white
                min-w-[220px]
                h-[64px]
                px-12
                rounded-md
                font-semibold
                text-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                active:scale-95
                hover:shadow-[0_15px_40px_rgba(249,115,22,0.35)]
              "
            >
              Learn More
            </button>

          </motion.div>

        </div>

        {/* Space before next section */}

        <div className="h-30"></div>

      </div>
    </section>
  );
};

export default WhyChooseUs;