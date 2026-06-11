import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN;
const USER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_USER;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const ContactSection = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await emailjs.send(
  SERVICE_ID,
  ADMIN_TEMPLATE_ID,
  formData,
  PUBLIC_KEY
);

      await emailjs.send(
  SERVICE_ID,
  USER_TEMPLATE_ID,
  formData,
  PUBLIC_KEY
);

      setSuccess(true);

      setFormData({
  from_name: "",
  from_email: "",
  phone: "",
  organization: "",
  service: "",
  message: "",
});
setTimeout(() => {
  setSuccess(false);
}, 3000);
    }catch (error) {
  console.error("EmailJS Error:", error);
  alert(
    `Status: ${error?.status}\nMessage: ${error?.text}`
  );
}finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-white overflow-hidden py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-24 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-5"
            >
              CONTACT US
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-6"
            >
              Let's Build Your <span className="text-orange-500">Future</span>
              <br />
              <span className="text-orange-500">Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed mb-12 max-w-lg"
            >
              Have questions about admissions, courses, training programs,
              placements, or career guidance? Our team is here to help you every
              step of the way.
            </motion.p>

            <motion.div
              className="space-y-8"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* EMAIL */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-5"
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
                  className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0"
                >
                  <HiOutlineMail size={26} className="text-orange-500" />
                </motion.div>

                <div>
                  <h4 className="font-bold text-xl text-black mb-1">
                    Email Us
                  </h4>

                  <p className="text-gray-600">info@jdktechsphere.com</p>
                </div>
              </motion.div>

              {/* PHONE */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-5"
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
                  className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0"
                >
                  <HiOutlinePhone size={26} className="text-orange-500" />
                </motion.div>

                <div>
                  <h4 className="font-bold text-xl text-black mb-1">Call Us</h4>

                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </motion.div>

              {/* LOCATION */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-5"
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
                  className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0"
                >
                  <HiOutlineLocationMarker
                    size={26}
                    className="text-orange-500"
                  />
                </motion.div>

                <div>
                  <h4 className="font-bold text-xl text-black mb-1">
                    Visit Us
                  </h4>

                  <p className="text-gray-600">Near Cambridge University, Tc palya , Bengaluru, Karnataka, India</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-10 flex items-center gap-4">
              <div className="flex-1 h-px bg-orange-200"></div>

              <span className="text-orange-500 font-semibold uppercase tracking-widest text-xs">
                Get In Touch
              </span>

              <div className="flex-1 h-px bg-orange-200"></div>
            </div>
            <div
              className="
                bg-white
                p-14 lg:p-16
                rounded-[36px]
                border
                border-orange-100
                shadow-[0_25px_70px_rgba(249,115,22,0.12)]
                box-border
              "
            >
              <div className="max-w-[92%] mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8 box-border">
                  <div className="grid md:grid-cols-2 gap-7">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="
                                    w-full
                                    h-14
                                    px-5
                                    rounded-2xl
                                    border
                                    border-gray-300
                                    focus:border-orange-500
                                    focus:outline-none
                                    transition-all
                                    box-border
                                    
                                "required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="
                                    w-full
                                    h-14
                                    px-5
                                    rounded-2xl
                                    border
                                    border-gray-300
                                    focus:border-orange-500
                                    focus:outline-none
                                    transition-all
                                    box-border
                            
                        "required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-7">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="
                                    w-full
                                    h-14
                                    px-5
                                    rounded-2xl
                                    border
                                    border-gray-300
                                    focus:border-orange-500
                                    focus:outline-none
                                    transition-all
                                    box-border
                                    
                                "required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Service Interested In
                      </label>

                      <input
                        type="text"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        placeholder="services you are interested in"
                        className="
                                w-full
                                h-14
                                px-5
                                rounded-2xl
                                border
                                border-gray-300
                                focus:border-orange-500
                                focus:outline-none
                                transition-all
                                box-border
                                
                            "required
                      />
                    </div>
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                       Company/Organisation/College 
                      </label>

                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="company Or Organisation name"
                        className="
                                    w-full
                                    h-14
                                    px-5
                                    rounded-2xl
                                    border
                                    border-gray-300
                                    focus:border-orange-500
                                    focus:outline-none
                                    transition-all
                                    box-border
                                    
                                "
                                required
                      />
                    </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="
                                    w-full
                                    px-5
                                    py-4
                                    rounded-2xl
                                    border
                                    border-gray-300
                                    focus:border-orange-500
                                    focus:outline-none
                                    resize-none
                                    box-border
                                "
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                     className={`
                            text-white
  font-semibold
  h-14
  min-w-[180px]
  rounded-md
  transition-all
  duration-300
  hover:scale-105
  active:scale-95
  disabled:opacity-70
  disabled:cursor-not-allowed
  ${
    success
      ? "bg-green-500"
      : "bg-orange-500 hover:bg-orange-600 hover:shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
                            }
                            `}
                                                >
                                                {
                            loading
                                ? "Sending..."
                                : success
                                ? "✓ Thanks For Contacting Us"
                                : "Send Message"
}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
    
  );
};

export default ContactSection;
