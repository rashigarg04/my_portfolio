import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Secondary School",
    institution: "Jain Public School",
    location: "Ferozepur Jhirka, Haryana",
    period: "2019 - 2020",
    description: "Completed secondary education with a focus on computer science fundamentals and mathematics. Graduated with honors.",
    achievements: ["8.8 GPA"],
  },
  {
    degree: "Higher Secondary School",
    institution: "Mewat Model School",
    location: "Ferozepur Jhirka, Haryana",
    period: "2021 - 2022",
    description: "Focused on Software Engineering and Web Development. Active member of the coding club.",
    achievements: ["District topper", "9.04 GPA"],
  },
  {
    degree: "B.tech - CSE",
    institution: "IILM University",
    location: "Greater Noida, Uttar Pradesh",
    period: "2023 - Present",
    description: "Specialized in Mathematics and Computer Science. Started programming journey here.",
    achievements: ["Core Member GDG", "Hackathon Winner", "8.57 GPA"],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-32 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Academic Background
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />
              
              <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors duration-300">
                <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="font-body text-xs uppercase tracking-wider text-primary">
                    {edu.period}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {edu.degree}
                </h3>
                
                <p className="font-body text-base text-muted-foreground mb-3">
                  {edu.institution}
                </p>
                
                <div className={`flex items-center gap-1 mb-4 text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <MapPin className="w-4 h-4" />
                  <span className="font-body text-sm">{edu.location}</span>
                </div>
                
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {edu.description}
                </p>
                
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {edu.achievements.map((achievement) => (
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

export default EducationSection;
