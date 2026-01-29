import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Mern stack developer",
    company: "Coursevita",
    period: " Oct 2025 - Present",
    description: "Built and maintained full-stack web apps at Coursevita using the MERN stack. Optimized frontend performance, ensured responsive UI, integrated APIs, and guided junior developers",
    achievements: [
      "Implemented responsive and user-friendly UI",
      "Enhanced platform accessibility and UX",
      "Deployed production-ready applications on cloud",
    ],
  },
  {
    role: " Palo Alto Networks Cybersecurity ",
    company: "AICTE - Eduskills",
    period: " Oct 2025 -  Dec 2025",
    description: "Worked on cybersecurity solutions at Palo Alto Networks, focusing on threat detection, network security, and vulnerability management.",
    achievements: [
      "Configured and optimized firewall and security policies",
      "Performed vulnerability assessments and risk analysis",
      "Collaborated with cross-functional teams to enhance security tools",
    ],
  },
  {
    role: "Senior Software developer",
    company: "Defendair technologies pvt. ltd.",
    period: "feb 2025 -  April 2025",
    description: "Built responsive web apps and optimized UX at DefendAir Technologies, delivering scalable solutions in collaboration with cross-functional teams",
    achievements: [
      "Developed and deployed core frontend features using React and Tailwind CSS",
      "Optimized website performance and load times by 30%",
      "Collaborated with backend team to integrate APIs and services",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Career Path
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-body text-sm font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="font-body text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {exp.role}
                </h3>
                
                <p className="font-body text-muted-foreground mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="px-3 py-1 bg-primary/10 text-primary font-body text-xs rounded-full"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
