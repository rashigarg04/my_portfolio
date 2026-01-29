import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#0B0B0B] flex items-center px-6 md:px-16 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#F5A000]/5 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#F5A000] mb-6">
            Student Portfolio
          </p>

          <h1 className="text-white font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I’m <span className="text-[#F5A000]">Rashi</span>
          </h1>

          <p className="text-white/90 text-xl md:text-2xl mb-6">
            MERN Stack Developer
          </p>

          <p className="text-white/60 max-w-md mb-10">
            I build responsive web applications and enjoy exploring
            cybersecurity concepts while continuously improving my
            development skills.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#F5A000] text-black font-medium rounded-lg hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-[#F5A000]/60 text-[#F5A000] rounded-lg hover:bg-[#F5A000]/10 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border border-[#F5A000]/30" />
            <img
              src="/assets/MEE.jpg"
              alt="Rashi"
              className="relative w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F5A000]/70 hover:text-[#F5A000]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>

    </section>
  );
};

export default HeroSection;
