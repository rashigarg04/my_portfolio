import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certificates = [
  {
    title: "Cybersecurity Fundamentals",
    issuer: "Palo Alto Networks",
    date: "December 29, 2025",
    credentialId: "PA-CYBER-2025",
    image: "/assets/cybersecurity fundamentals.jpeg",
    verifyUrl: "/assets/cybersecurity fundamentals.jpeg",
  },
  {
    title: "Volunteer in Hack O'Clock Hackathon",
    issuer: "Google Developer Group",
    date: "April 30, 2025",
    credentialId: "GDG-HACK-2025",
    image: "/assets/gdg.jpeg",
    verifyUrl: "/assets/gdg.jpeg",
  },
  {
    title: "MERN Stack Developer",
    issuer: "Coursevita",
    date: "January 6, 2026",
    credentialId: "MERN-CV-2026",
    image: "/assets/Coursevita.jpeg",
    verifyUrl: "/assets/Coursevita.jpeg",
  },
  {
    title: "Flipkart Runway Season 5",
    issuer: "Flipkart",
    date: "2022",
    credentialId: "FLIPKART-RUNWAY-5",
    image: "/assets/flipkart.png",
    verifyUrl: "/assets/flipkart.png",
  },
  {
    title: "Hackathon Participation",
    issuer: "NIET, Greater Noida",
    date: "April 13, 2024",
    credentialId: "NIET-HACK-2024",
    image: "/assets/hackathon.png",
    verifyUrl: "/assets/hackathon.png",
  },
  {
    title: "Cybersecurity Virtual Internship",
    issuer: "AICTE – EduSkills",
    date: "December 2025",
    credentialId: "AICTE-CYBER-2025",
    image: "/assets/paloalto.png",
    verifyUrl: "/assets/paloalto.png",
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certificates"
      ref={ref}
      className="py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Certificates & Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    ID: {cert.credentialId}
                  </span>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary text-xs hover:underline"
                  >
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
