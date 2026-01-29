import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 md:px-12 lg:px-20 bg-card"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Let's work together
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            variant="hero"
            size="lg"
            className="group"
            onClick={() => window.location.href = "mailto:hello@example.com"}
          >
            <Mail className="w-5 h-5 mr-2" />
            Say Hello
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 pt-16 border-t border-border"
        >
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-body">rashiig72@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-body">Greater Noida, UttarPradesh</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
