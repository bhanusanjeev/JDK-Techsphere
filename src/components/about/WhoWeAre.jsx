import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaGraduationCap />,
    title: "Training",
  },
  {
    icon: <FaBriefcase />,
    title: "Internships",
  },
  {
    icon: <FaUsers />,
    title: "Mentorship",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
  },
];

const WhoWeAre = () => {
  return (
    <section className="bg-white py-36 px-6 mt-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex px-5 py-2 rounded-md border border-orange-600/30 bg-orange-600/10 text-orange-600 mb-6">
              Who We Are
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transforming
              <span className="block text-orange-600">
                Learning Into
              </span>
              Opportunity
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              JDKTechsphere is a technology-driven organization committed to
              empowering students, graduates, and aspiring professionals
              through practical learning experiences that prepare them for
              the demands of the modern workforce.
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Through industry-focused training, internships, mentorship,
              and consultancy services, we help individuals develop
              technical skills, professional confidence, and career
              readiness while connecting learning with real-world
              opportunities.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              rounded-3xl
              border
              border-orange-200
              bg-white
              p-12
              md:p-16
              shadow-[0_15px_40px_rgba(0,0,0,0.08)]
              hover:shadow-[0_0_50px_rgba(234,88,12,0.15)]
              transition-all
              duration-500
            "
          >
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-600/5 to-transparent" />

            {/* Content */}
            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                justify-center
                text-center
                h-full
              "
            >
              <div className="text-8xl font-bold text-orange-1000/10 mb-6">
                JDK
              </div>

              <h3 className="text-4xl font-bold text-gray-900">
                Empowering Future Professionals
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed max-w-lg mx-auto">
                We believe education becomes meaningful when it creates
                confidence, opportunities, and measurable impact. Our
                mission is to bridge the gap between academic learning
                and industry expectations through practical experiences,
                professional guidance, and continuous growth.
              </p>

              {/* Mini Cards */}
              <div className="grid grid-cols-2 gap-5 mt-12 w-full">
                {stats.map((item) => (
                  <div
                    key={item.title}
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center
                      gap-3
                      rounded-xl
                      border
                      border-orange-100
                      bg-orange-50/60
                      px-6
                      py-5
                      hover:border-orange-300
                      hover:shadow-[0_0_25px_rgba(234,88,12,0.10)]
                      transition-all
                      duration-300
                    "
                  >
                    <div className="text-orange-600 text-2xl">
                      {item.icon}
                    </div>

                    <span className="font-medium text-gray-800">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Divider */}
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

export default WhoWeAre;