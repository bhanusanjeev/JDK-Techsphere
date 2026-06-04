import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Footer = () => {
  return (
   <motion.footer
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* TOP */}

        <div className="grid lg:grid-cols-3 gap-16">

          {/* LEFT */}

          <div>

            {/* Replace Later With Logo */}

            <div className="flex items-center gap-3 mb-6">

             <motion.div
                    whileHover={{
                        scale: 1.08,
                        rotate: 5,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                    }}
                    className="
                        w-12
                        h-12
                        bg-orange-500
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        text-white
                        font-bold
                        text-xl
                    "
                    >
                    J
            </motion.div>

              <h2 className="text-2xl font-bold text-black">
                JDKTechsphere
              </h2>

            </div>

            <p className="text-gray-600 leading-8 max-w-md">
              Empowering students through internships,
              training, career guidance, and helping
              organizations connect with skilled talent.
            </p>

          </div>

          {/* CENTER */}

          <div className="flex flex-col gap-4 text-gray-600">

  <a href="/" className="hover:text-orange-500 hover:translate-x-2 transition-all duration-300 inline-block">
    Home
  </a>

  <a href="/consultancy" className="hover:text-orange-500 hover:translate-x-2 transition-all duration-300 inline-block">
    Consultancy
  </a>

  <a href="/internships" className="hover:text-orange-500 hover:translate-x-2 transition-all duration-300 inline-block">
    Internships
  </a>

  <a href="/training" className="hover:text-orange-500 hover:translate-x-2 transition-all duration-300 inline-block">
    Training
  </a>

  <a href="/about" className="hover:text-orange-500 hover:translate-x-2 transition-all duration-300 inline-block">
    About
  </a>

 <HashLink
  smooth
  to="/#contact"
  className="hover:text-orange-500 hover:translate-x-2 transition-all duration-300 inline-block"
>
  Contact
</HashLink>
</div>
          {/* RIGHT */}

          <div>

            <h3 className="text-xl font-bold text-black mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">

                <HiOutlineMail
                  className="text-orange-500"
                  size={22}
                />

                <span className="text-gray-600">
                  info@jdktechsphere.com
                </span>

              </div>

              <div className="flex items-center gap-4">

                <HiOutlinePhone
                  className="text-orange-500"
                  size={22}
                />

                <span className="text-gray-600">
                  +91 98765 43210
                </span>

              </div>

              <div className="flex items-center gap-4">

                <HiOutlineLocationMarker
                  className="text-orange-500"
                  size={22}
                />

                <span className="text-gray-600">
                  Bengaluru, Karnataka
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

       <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-px bg-orange-100 my-12 origin-center"
                />

        {/* BOTTOM */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-6
          "
        >

          <p className="text-gray-500 text-sm">
            © 2026 JDKTechsphere. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">

  <motion.a
    href="#"
    whileHover={{ scale: 1.15, y: -4 }}
    whileTap={{ scale: 0.95 }}
    className="
      w-11
      h-11
      rounded-full
      border
      border-orange-200
      flex
      items-center
      justify-center
      text-orange-500
      hover:bg-orange-500
      hover:text-white
      hover:shadow-[0_0_20px_rgba(249,115,22,0.45)]
      transition-all
      duration-300
    "
  >
    <FaInstagram />
  </motion.a>

  <motion.a
    href="#"
    whileHover={{ scale: 1.15, y: -4 }}
    whileTap={{ scale: 0.95 }}
    className="
      w-11
      h-11
      rounded-full
      border
      border-orange-200
      flex
      items-center
      justify-center
      text-orange-500
      hover:bg-orange-500
      hover:text-white
      hover:shadow-[0_0_20px_rgba(249,115,22,0.45)]
      transition-all
      duration-300
    "
  >
    <FaXTwitter />
  </motion.a>

  <motion.a
    href="#"
    whileHover={{ scale: 1.15, y: -4 }}
    whileTap={{ scale: 0.95 }}
    className="
      w-11
      h-11
      rounded-full
      border
      border-orange-200
      flex
      items-center
      justify-center
      text-orange-500
      hover:bg-orange-500
      hover:text-white
      hover:shadow-[0_0_20px_rgba(249,115,22,0.45)]
      transition-all
      duration-300
    "
  >
    <FaLinkedinIn />
  </motion.a>

</div>

        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;