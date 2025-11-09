import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-padding fade-in-up" style={{ animationDelay: '0.4s' }}>
      <div className="container mx-auto">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
          Education
        </h2>
        <div className="relative mx-auto max-w-2xl">
          <Separator orientation="vertical" className="absolute left-4 h-full" />
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start gap-6">
                <div className="z-10 mt-1 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  {edu.details && <p className="mt-2 text-sm">{edu.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
