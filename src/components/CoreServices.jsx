import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineLightBulb,
} from "react-icons/hi";
const services = [
  {
    icon: <HiOutlineOfficeBuilding size={28} />,
    badge: "BUSINESS SOLUTIONS",
    title: "Consultancy",
    description:
      "Helping organizations hire the right talent through strategic workforce solutions and expert consulting.",
    link: "/consultancy",
  },
  {
    icon: <HiOutlineBriefcase size={28} />,
    badge: "INDUSTRY EXPERIENCE",
    title: "Internships",
    description:
      "Industry-focused internship opportunities that provide students with practical experience.",
    link: "/internships",
  },
  {
    icon: <HiOutlineAcademicCap size={28} />,
    badge: "SKILL DEVELOPMENT",
    title: "Training",
    description:
      "Professional training programs designed to make learners industry-ready and future-proof.",
    link: "/training",
  },
  {
    icon: <HiOutlineUserGroup size={28} />,
    badge: "CAREER SUPPORT",
    title: "Placement Assistance",
    description:
      "Resume building, mock interviews, career coaching, and placement support for job seekers.",
    link: "/career-services#placement",
  },
  {
    icon: <HiOutlineChartBar size={28} />,
    badge: "TALENT ACQUISITION",
    title: "Corporate Hiring",
    description:
      "Connecting businesses with skilled professionals through streamlined hiring solutions.",
    link: "/career-services#hiring",
  },
  {
    icon: <HiOutlineLightBulb size={28} />,
    badge: "MENTORSHIP",
    title: "Career Guidance",
    description:
      "Personalized mentoring and career planning to help students choose the right path.",
    link: "/career-services#guidance",
  },
];

const CoreServices = () => {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto px-2"
        >
          <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
            What We Do
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Core <span className="text-orange-500">Services</span>
          </h2>

          <div className="mt-4 flex justify-center">
            <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
          </div>

          <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Empowering businesses and students through consultancy, internships,
            placement support, training programs, and career development
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-10 md:mt-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-5
                sm:p-6
                min-h-[240px]
                sm:min-h-[260px]
                flex
                flex-col
                items-center
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                hover:border-orange-200
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-xl
                  bg-orange-50
                  flex
                  items-center
                  justify-center
                  text-orange-500
                "
              >
                {service.icon}
              </div>

              <span
                className="
                  mt-4
                  px-3
                  py-1
                  rounded-full
                  bg-orange-50
                  text-orange-500
                  text-[10px]
                  sm:text-[11px]
                  font-semibold
                  tracking-wide
                "
              >
                {service.badge}
              </span>

              <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <div className="mt-3 w-10 h-[2px] bg-orange-400 rounded-full"></div>

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-6
                  text-sm
                  flex-grow
                "
              >
                {service.description}
              </p>

              <Link
                to={service.link}
                className="
                            mt-auto
                            pt-5
                            text-orange-500
                            font-semibold
                            text-xs
                            sm:text-sm
                            hover:text-orange-600
                            transition-all
                            duration-300
                        "
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Space before next section */}

        <div className="relative h-20 flex justify-center items-center">
          <div
            className="
                        absolute
                        w-[400px]
                        h-[100px]
                        bg-orange-500/15
                        blur-[80px]
                        rounded-full
                        "
          />

          <div
            className="
                        relative
                        z-10
                        w-24
                        h-1
                        bg-orange-500
                        rounded-full
                        "
          />
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
