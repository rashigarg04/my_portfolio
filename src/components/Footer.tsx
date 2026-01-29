import { Github, Linkedin} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/rashigarg04",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rashi-garg-84b002294/",
  },
];

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-12 lg:px-20 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-medium text-foreground">Rashi</span>. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
