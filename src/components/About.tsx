import { Card } from "./ui/card";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Diploma in Computer science and engineering",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Experience",
      description: "2 Years in Development",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Projects",
      description: "15+ Completed Projects",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what inspires me
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with a keen eye for creating elegant solutions
                to complex problems. My journey in tech started with curiosity and has grown into a
                deep commitment to building impactful digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or mentoring aspiring developers. I believe in continuous
                learning and staying updated with industry trends.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines technical expertise with creative problem-solving, ensuring
                that every project I work on is both functional and aesthetically pleasing.
              </p>
            </div>

            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
