import { motion } from "framer-motion";
import placementImg from "../assets/images/placement.jpg";
import hiringImg from "../assets/images/hiring.jpg";
import guidanceImg from "../assets/images/guidance.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  HiOutlineBriefcase,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
} from "react-icons/hi";




const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const cardClass = `
  bg-white
  rounded-[32px]
  p-10
  border
  border-orange-100
  shadow-[0_20px_60px_rgba(249,115,22,0.08)]
`;

const CareerServices = () => {
  const location = useLocation();

 useEffect(() => {
  if (!location.hash) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  const element = document.querySelector(location.hash);

  if (element) {
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
}, [location]);

  return (
    <div className="bg-white overflow-hidden">
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-semibold uppercase tracking-[6px]"
          >
            CAREER SERVICES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl font-bold text-slate-900"
          >
            Building Careers.
            <br />
            <span className="text-orange-500">
              Creating Opportunities.
            </span>
          </motion.h1>

          <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-xl text-gray-600 leading-9 max-w-4xl mx-auto"
            >
                                Choosing the right career path can be challenging.
                    Our career guidance programs help students and
                    professionals gain clarity through personalized
                    mentoring, skill assessments, and structured career
                    roadmaps tailored to their goals.

                    <br /><br />

                    By combining industry insights, higher education
                    guidance, and practical career planning strategies,
                    we empower individuals to make informed decisions
                    and confidently pursue their aspirations.
            </motion.p>
        </div>
      </section>

      <motion.section
        id="placement"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-20 h-20 rounded-3xl bg-orange-50 flex items-center justify-center text-orange-500">
              <HiOutlineBriefcase size={40} />
            </div>

            <h2 className="mt-8 text-5xl font-bold text-slate-900">
              Placement Assistance
            </h2>

                    <p className="mt-8 text-lg text-gray-600 leading-9">
                        Our placement assistance services are designed to
                        bridge the gap between academic learning and
                        real-world industry expectations. We work closely
                        with students to strengthen their resumes, improve
                        communication skills, prepare for aptitude and
                        technical assessments, and build confidence through
                        mock interviews and mentorship sessions.

                        <br /><br />

                        Through industry-aligned preparation programs and
                        placement support initiatives, we help candidates
                        showcase their strengths effectively and improve
                        their chances of securing rewarding career
                        opportunities in leading organizations.
                    </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-5 py-3 rounded-full bg-orange-50 text-orange-500 font-medium">Resume Building</span>
              <span className="px-5 py-3 rounded-full bg-orange-50 text-orange-500 font-medium">Mock Interviews</span>
              <span className="px-5 py-3 rounded-full bg-orange-50 text-orange-500 font-medium">Placement Support</span>
            </div>
          </div>

          <div className="relative flex justify-center">

  {/* Orange Glow */}

  <div
    className="
      absolute
      w-72
      h-72
      bg-orange-500/20
      blur-[100px]
      rounded-full
    "
  />

  {/* Image */}

  <img
    src={placementImg}
    alt="Placement Assistance"
    className="
      relative
      z-10
      w-[1100px]
      lg:w-[1080px]
      rounded-[32px]
      object-cover
      shadow-2xl
      border
      border-orange-100
    "
  />

</div>
        </div>
      </motion.section>

      <motion.section
        id="hiring"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center px-6 py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">

  {/* Orange Glow */}

  <div
    className="
      absolute
      w-72
      h-72
      bg-orange-500/20
      blur-[100px]
      rounded-full
    "
  />

  {/* Image */}

  <img
    src={hiringImg}    alt="hiring image "
    className="
      relative
      z-10
      w-[1100px]
      lg:w-[1080px]
      rounded-[12px]
      object-cover
      shadow-2xl
      border
      border-orange-100
    "
  />

</div>

          <div>
            <div className="w-20 h-20 rounded-3xl bg-orange-50 flex items-center justify-center text-orange-500">
              <HiOutlineUserGroup size={40} />
            </div>

            <h2 className="mt-8 text-5xl font-bold text-slate-900">
              Corporate Hiring
            </h2>
                <p className="mt-8 text-lg text-gray-600 leading-9">
                Our corporate hiring solutions enable businesses to
                identify, attract, and recruit highly qualified
                talent efficiently. From sourcing and screening to
                candidate evaluation and onboarding support, we
                simplify the recruitment process while ensuring
                quality outcomes.

                <br /><br />

                We collaborate with organizations across industries
                to build strong teams capable of driving innovation,
                productivity, and long-term business growth.
                </p>

                            <div className="flex flex-wrap gap-4 mt-8">
                            <span className="px-5 py-3 rounded-full bg-orange-50 text-orange-500 font-medium">Recruitment</span>
                            <span className="px-5 py-3 rounded-full bg-orange-50 text-orange-500 font-medium">Talent Match</span>
                            <span className="px-5 py-3 rounded-full bg-orange-50 text-orange-500 font-medium">Workforce Growth</span>
                            </div>
                        </div>
                        </div>
      </motion.section>

      <motion.section
        id="guidance"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-20 h-20 rounded-3xl bg-orange-50 flex items-center justify-center text-orange-500">
              <HiOutlineLightBulb size={40} />
            </div>

            <h2 className="mt-8 text-5xl font-bold text-slate-900">
              Career Guidance
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              At JDK Tech Sphere, we believe that the right guidance at the right time can shape a student's entire future. Our career guidance programs are designed to help learners identify their strengths, explore opportunities, and make informed decisions about their academic and professional journey. We focus on providing practical insights into industry trends, emerging technologies, higher education pathways, and career opportunities across various domains. Through personalized mentorship and structured counseling, we empower students to build confidence, set meaningful goals, and create a clear roadmap for success. Our mission is not only to help students choose a career but to equip them with the knowledge, skills, and direction needed to thrive in an ever-evolving professional world.

            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-5 py-3 rounded-md bg-orange-50 text-orange-500 font-medium">Mentorship</span>
              <span className="px-5 py-3 rounded-md bg-orange-50 text-orange-500 font-medium">Roadmaps</span>
              <span className="px-5 py-3 rounded-md bg-orange-50 text-orange-500 font-medium">Industry Insights</span>
            </div>
          </div>
<div className="relative flex justify-center">

  {/* Orange Glow */}

  <div
    className="
      absolute
      w-72
      h-72
      bg-orange-500/20
      blur-[100px]
      rounded-full
    "
  />

  {/* Image */}

 <img
    src={guidanceImg}    alt="guidance image "
    className="
      relative
      z-10
      w-[1100px]
      lg:w-[1080px]
      rounded-[12px]
      object-cover
      shadow-2xl
      border
      border-orange-100
    "
  />

</div>
        </div>
      </motion.section>

      <section className="min-h-[60vh] flex items-center justify-center px-6 py-24">
        <div className="max-w-5xl w-full mx-auto text-center bg-orange-50 rounded-[10px] p-12">
          <h2 className="text-5xl font-bold text-slate-900">
            Ready To Accelerate Your Career?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Whether you're a student or an organization, we're here to support your journey.
          </p>

    <HashLink smooth to="/#contact">
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="
      mt-12
      mx-auto
      flex
      items-center
      justify-center
      min-w-[200px]
      h-[48px]
      px-14
      bg-orange-500
      border
      border-orange-200
      text-white
      rounded-xl
      font-semibold
      text-lg
      transition-all
      duration-300
      hover:bg-orange-100
      hover:text-orange-500
      hover:scale-105
      active:scale-95
      shadow-lg
      hover:shadow-2xl
      hover:shadow-orange-500/30
    "
  >
    Get Started
  </motion.button>
</HashLink>
        </div>
      </section>

      <div className="h-24" />
    </div>
  );
};

export default CareerServices;
