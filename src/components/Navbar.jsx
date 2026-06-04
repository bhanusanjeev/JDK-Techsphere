import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Consultancy", path: "/consultancy" },
    { name: "Internships", path: "/internships" },
    { name: "Training", path: "/training" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

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
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold"
            >
              J
            </motion.div>

            <h1 className="text-2xl font-bold text-gray-900">
              JDKTechsphere
            </h1>
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
                  whileHover={{
                    y: -2,
                  }}
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

            </div>
          </motion.div>
        )}

      </AnimatePresence>

    </motion.header>
  );
};

export default Navbar;