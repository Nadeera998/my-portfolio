import { portfolioData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cog, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code className="h-6 w-6" />,
    skills: portfolioData.skills.programming,
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: portfolioData.skills.databases,
  },
  {
    title: "Frameworks & Tools",
    icon: <Cog className="h-6 w-6" />,
    skills: portfolioData.skills.frameworksTools,
  },
  {
    title: "Development",
    icon: <Code className="h-6 w-6" />,
    skills: portfolioData.skills.development,
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-6 w-6" />,
    skills: portfolioData.skills.softSkills,
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/50 fade-in-up" style={{ animationDelay: '0.6s' }}>
      <div className="container mx-auto">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
          My Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                </div>
                <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
