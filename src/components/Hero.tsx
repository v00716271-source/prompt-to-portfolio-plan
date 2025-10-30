import { Button } from "./ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-subtle -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-foreground/80">
              Full Stack Developer & Creative Problem Solver
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-friendly digital experiences.
            Specialized in modern web technologies and always eager to learn new skills.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="shadow-primary">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#contact" className="flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <Download size={18} />
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
