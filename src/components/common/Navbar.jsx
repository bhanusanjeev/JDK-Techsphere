import { useState } from "react";
import logo from "../../assets/images/logo.png";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "IT Consulting", path: "/consultancy" },
    { name: "Internships", path: "/internships" },
    { name: "Training", path: "/training" },
    { name: "About", path: "/about" },
  ];

  const scrollToContact = () => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 300);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="w-full bg-white border-b border-gray-200 shadow-sm"
    >
      <nav className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center">

        {/* Logo */}

        <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    delay: 0.2,
    duration: 0.6,
  }}
>
  <Link to="/">
    <motion.img
      src={logo}
      alt="JDKTechsphere"
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="h-25 w-auto object-contain"
    />
  </Link>
</motion.div>

        {/* Desktop Nav */}

        <div className="hidden lg:flex flex-1 justify-center items-center gap-14">

          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.08,
                duration: 0.4,
              }}
            >
              <Link
                to={link.path}
                className={`
                  relative
                  font-medium
                  transition-all
                  duration-300
                  group
                  ${
                    location.pathname === link.path
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }
                `}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="inline-block"
                >
                  {link.name}
                </motion.span>

                <span
                  className={`
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    bg-orange-500
                    transition-all
                    duration-300
                    ${
                      location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            </motion.div>
          ))}

          {/* CONTACT BUTTON */}

          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.4,
            }}
            whileHover={{ y: -2 }}
            className="
              relative
              font-medium
              text-gray-700
              hover:text-orange-500
              transition-all
              duration-300
              group
            "
          >
            Contact

            <span
              className="
                absolute
                left-0
                -bottom-2
                h-[2px]
                bg-orange-500
                transition-all
                duration-300
                w-0
                group-hover:w-full
              "
            />
          </motion.button>

        </div>

        {/* Mobile Menu */}

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden ml-auto text-3xl"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </motion.button>

      </nav>

      {/* Mobile Dropdown */}

      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="lg:hidden border-t border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col gap-5 p-6">

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="
                      font-medium
                      text-gray-700
                      hover:text-orange-500
                      transition-colors
                    "
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                onClick={scrollToContact}
                className="
                  text-left
                  font-medium
                  text-gray-700
                  hover:text-orange-500
                  transition-colors
                "
              >
                Contact
              </motion.button>

            </div>
          </motion.div>
        )}

      </AnimatePresence>

    </motion.header>
  );
};

export default Navbar;