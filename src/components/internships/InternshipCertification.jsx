import { motion } from "framer-motion";
import certificateImage from "../../assets/images/certificate.png";

const InternshipCertification = () => {
  return (
    <section className="relative overflow-hidden bg-white py-40 px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            h-[700px]
            w-[700px]
            rounded-full
            bg-orange-500/10
            blur-[180px]
          "
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Divider */}
        <div className="mb-24 flex justify-center">
          <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Certificate */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-orange-200
                bg-white
                p-4
                shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-orange-500
                hover:shadow-[0_0_70px_rgba(249,115,22,0.25)]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-br
                  from-orange-500/5
                  to-transparent
                "
              />

              <img
                src={certificateImage}
                alt="Internship Certificate"
                className="
                  relative
                  z-10
                  rounded-2xl
                  w-full
                  max-w-2xl
                  object-cover
                  transition-all
                  duration-500
                  group-hover:scale-[1.01]
                "
              />
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-5 py-2 rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm mb-6">
              Certification & Recognition
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Earn an
              <span className="block text-orange-500">
                Industry-Recognized
              </span>
              Certificate
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Complete your internship journey with hands-on project experience,
              expert mentorship, and a professional certificate that validates
              your skills and showcases your achievements to recruiters and
              organizations.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Internship Completion Certificate",
                "Real-World Project Experience",
                "Industry Mentor Guidance",
                "Resume Building Support",
                "LinkedIn Profile Enhancement",
                "Career & Interview Readiness",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 text-gray-700"
                >
                  <div className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Divider */}
       <div className="mt-24 text-center">
  <div className="inline-flex items-center gap-3">
    <div className="w-24 h-px bg-orange-300" />
    <div className="w-3 h-3 rounded-full bg-orange-500" />
    <div className="w-24 h-px bg-orange-300" />
  </div>
</div>
      </div>
    </section>
  );
};

export default InternshipCertification;