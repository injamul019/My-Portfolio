import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-bg-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="text-brand" size={20} />
            <span className="font-bold text-white">
              Injamul<span className="text-brand">.019</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/injamul019"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-brand transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-injamul-haque-956924266/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-brand transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:injamul.sylhet@gmail.com"
              className="text-slate-400 hover:text-brand transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-sm">
            © {currentYear} Injamul Haque. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
