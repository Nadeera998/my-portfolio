import { Briefcase } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Separator } from "../ui/separator";

export function Experience() {
  const { workExperience } = portfolioData;

  return (
    <section id="experience" className="section-padding bg-muted/50 fade-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="container mx-auto">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
          Work Experience
        </h2>
        <div className="relative mx-auto max-w-3xl">
           <Separator orientation="vertical" className="absolute left-4 h-full" />
           <div className="space-y-10">
            {workExperience.map((job, index) => (
                <div key={index} className="relative flex items-start gap-6">
                    <div className="z-10 mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                        <Briefcase className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">{job.role}</CardTitle>
                                <CardDescription>
                                    {job.company} &bull; {job.period}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                                    {job.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
           </div>
        </div>
      </div>
    </section>
  );
}
