import { motion } from "framer-motion";
import {
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineTrendingUp,
} from "react-icons/hi";

import consultancyHero from "../../assets/images/consultancy-hero.jpg";

const ConsultancyHero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}

      <div className="absolute inset-0">
        <img
          src={consultancyHero}
          alt="Consultancy"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              border
              border-orange-400/30
              bg-orange-500/10
              text-orange-400
              font-medium
              mb-8
            "
          >
            IT CONSULTING • CORPORATE HIRING • TALENT ACQUISITION
          </div>

          {/* Heading */}

          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              text-white
              leading-tight
            "
          >
            Where Talent
            <span className="text-orange-500">
              {" "}Meets Opportunity.
            </span>
          </h1>

          <h2
            className="
              mt-6
              text-2xl
              md:text-3xl
              font-medium
              text-gray-200
            "
          >
            Helping Businesses Build
            High-Performing Teams.
          </h2>

          {/* Description */}

          <p
            className="
              mt-8
              text-lg
              md:text-xl
              text-gray-300
              leading-9
              max-w-3xl
            "
          >
            JDKTechsphere specializes in strategic recruitment,
            corporate hiring, resource provisioning, and talent
            acquisition solutions that help organizations
            scale faster with the right professionals.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              className="
                px-8
                py-4
                bg-orange-500
                hover:bg-orange-600
                text-white
                font-semibold
                rounded-xl
                transition-all
                duration-300
              "
            >
              Get Started
            </button>

            <button
              className="
                px-8
                py-4
                border
                border-white/30
                text-white
                hover:bg-white
                hover:text-black
                font-semibold
                rounded-xl
                transition-all
                duration-300
              "
            >
              Contact Team
            </button>

          </div>

        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
            mt-24
          "
        >

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <HiOutlineUsers
              className="text-orange-400"
              size={34}
            />

            <h3 className="text-3xl font-bold text-white mt-4">
              100+
            </h3>

            <p className="text-gray-300 mt-2">
              Professionals Connected
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <HiOutlineOfficeBuilding
              className="text-orange-400"
              size={34}
            />

            <h3 className="text-3xl font-bold text-white mt-4">
              50+
            </h3>

            <p className="text-gray-300 mt-2">
              Hiring Partners
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <HiOutlineBriefcase
              className="text-orange-400"
              size={34}
            />

            <h3 className="text-3xl font-bold text-white mt-4">
              95%
            </h3>

            <p className="text-gray-300 mt-2">
              Hiring Success Rate
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <HiOutlineTrendingUp
              className="text-orange-400"
              size={34}
            />

            <h3 className="text-3xl font-bold text-white mt-4">
              24/7
            </h3>

            <p className="text-gray-300 mt-2">
              Recruitment Support
            </p>
          </div>

        </motion.div>

      </div>
      
    </section>
    
  );
};

export default ConsultancyHero;