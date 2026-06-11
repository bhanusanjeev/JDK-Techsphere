import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const InternshipHero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/#contact");
  };

  const scrollToCoreservices = () => {
    navigate("/#services");
  };

  return (
    <section
      className="relative min-h-[80vh] overflow-hidden flex items-center"
      style={{
        background:
          "radial-gradient(circle at center, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.03) 40%, #f8fafc 80%)",
      }}
    >
      {/* Background Glow Effects */}
      <div className="absolute pointer-events-none top-20 left-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute pointer-events-none bottom-10 right-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-md
              border
              border-orange-500/30
              bg-orange-500/10
              text-orange-500
              text-sm
              mb-8
            "
          >
            Industry-Focused Internship Programs
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-gray-900
              leading-tight
            "
          >
            Launch Your Career With
            <span className="block text-orange-500">
              Real-World Internships
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              mt-8
              max-w-3xl
              mx-auto
              text-gray-600
              text-lg
              md:text-xl
              leading-relaxed
            "
          >
            Gain practical experience through live projects, expert mentorship,
            industry tools, and certification programs designed to make you
            job-ready in today's competitive technology landscape.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
          >
            {/* Apply Now */}
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
              Apply Now
              <HiArrowRight className="text-xl" />
            </button>

            {/* Explore Programs */}
            <button
              onClick={scrollToCoreservices}
              className="
                flex
                items-center
                justify-center
                gap-3
                border
                border-orange-500
                text-orange-500
                hover:bg-orange-500
                hover:text-white
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
                hover:shadow-[0_15px_40px_rgba(249,115,22,0.25)]
              "
            >
              Explore Programs
              <HiArrowRight className="text-xl" />
            </button>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default InternshipHero;