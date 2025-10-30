import { Card } from "./ui/card";
import { Code, Database, Palette, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "Django"],
      color: "bg-accent/10 text-accent",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Tools",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Git", "Docker", "AWS"],
      color: "bg-primary-dark/10 text-primary-dark",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Others",
      skills: ["UI/UX Design", "Figma", "Responsive Design", "Agile", "Testing", "CI/CD"],
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-4 rounded-lg ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
