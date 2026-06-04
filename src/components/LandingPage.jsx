import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import heroImage from "../assets/images/hero.png";

const LandingPage = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="min-h-[85vh] bg-white px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="
                inline-flex
                items-center
                px-5
                py-2
                rounded-md
                bg-orange-50
                border
                border-orange-200
                text-orange-600
                text-sm
                font-medium
              "
            >
              IT CONSULTING • INTERNSHIPS • TRAINING
            </div>

            <h1
              className="
                mt-8
                text-4xl
                md:text-5xl
                xl:text-6xl
                font-bold
                leading-tight
                text-gray-900
              "
            >
              Helping Businesses
              <br />

              <span className="text-orange-500">
                Find Talent.
              </span>

              <br />

              Building Careers.
            </h1>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-9
                text-gray-600
              "
            >
              JDKTechsphere bridges the gap between talented
              professionals and growing organizations through
              consultancy services, internship opportunities,
              and industry-focused training programs.
            </p>

            <div className="mt-12 flex flex-wrap gap-8">

              <button
                onClick={scrollToContact}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
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
                Get Started
                <HiArrowRight className="text-xl" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                }
                className="
                  flex
                  items-center
                  justify-center
                  min-w-[220px]
                  h-[64px]
                  px-12
                  border
                  border-gray-300
                  hover:border-orange-500
                  hover:text-orange-500
                  hover:bg-orange-50
                  rounded-md
                  font-semibold
                  text-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  active:scale-95
                  hover:shadow-lg
                "
              >
                Explore Services
              </button>

            </div>

            <div className="mt-14 flex gap-14 flex-wrap">

              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  100+
                </h3>

                <p className="mt-2 text-gray-500">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  50+
                </h3>

                <p className="mt-2 text-gray-500">
                  Hiring Partners
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  10+
                </h3>

                <p className="mt-2 text-gray-500">
                  Technology Domains
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-start pt-6"
          >
            <div
              className="
                absolute
                w-[500px]
                h-[500px]
                bg-orange-400/20
                blur-[120px]
                rounded-full
                -z-10
                top-20
              "
            />

            <motion.img
              src={heroImage}
              alt="JDKTechsphere Hero"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                w-full
                max-w-[1500px]
                scale-125
                object-contain
                drop-shadow-[0_30px_80px_rgba(249,115,22,0.35)]
              "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LandingPage;