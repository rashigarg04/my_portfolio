import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Amazon Clone",
    category: "Full Stack Web App",
    description:
      "E-commerce web application with product listing, cart functionality, authentication, and order summary.",
    image: "/assets/amazon-clone.png",
    tech: ["HTML", "CSS", "Express", "JavaScript"],
    github: "https://github.com/rashigarg04/Amazon-Clone",
    featured: true,
  },
  {
    title: "To-Do List Application",
    category: "Web Application",
    description:
      "Task management app with CRUD operations, local storage support, and responsive UI.",
    image: "/assets/to-do list.png",
    tech: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/rashigarg04/To-do-list",
    featured: true,
  },
  {
    title: "Coding Ninjas Clone",
    category: "Frontend Project",
    description:
      "UI clone of Coding Ninjas website with responsive design and modern layout.",
    image: "/assets/codingninja.png",
    tech: ["React JS", "Tailwind CSS"],
    github: "#",
    featured: false,
  },
  {
    title: "Login Page UI",
    category: "Frontend Project",
    description:
      "Responsive login page with form validation and clean UI design.",
    image: "/assets/login.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rashigarg04/login-page",
    featured: false,
  },
];

const ProjectCard = ({ project, index, featured }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`rounded-2xl border border-border ${
        featured ? "overflow-hidden" : ""
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-4 w-full object-cover"
      />

      <div className="p-6">
        <p className="text-xs uppercase text-primary mb-2">
          {project.category} {featured && "• Featured"}
        </p>

        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary"
        >
          <Github className="w-4 h-4" /> View Code
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Student Portfolio
          </p>
          <h2 className="text-4xl font-semibold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Academic and personal projects showcasing my frontend and full-stack
            development skills.
          </p>
        </div>

        <div className="grid gap-8 mb-16">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} featured />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
