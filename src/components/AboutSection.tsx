import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 md:px-12 lg:px-20 bg-card"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6" />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3" />
              <img
                src="/assets/MEE.jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-2xl"
              />
            </div>   
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              About Me
            </p>

            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
             Full-Stack (MERN) Developer focused on building clean and modern web experiences
            </h2>

            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              I'm a passionate frontend developer who enjoys creating responsive,
              user-friendly websites using modern technologies like React and
              Tailwind CSS.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Currently, I am focused on improving my development skills by building
              real-world projects, exploring UI/UX best practices, and continuously
              learning new tools and frameworks.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Greater Noida, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>rashiig72@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 905048473</span>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="assets/Rashi Resume New.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
