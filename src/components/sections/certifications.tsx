import { Award } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section-padding fade-in-up" style={{ animationDelay: '0.7s' }}>
      <div className="container mx-auto">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
          Certifications
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="flex-1 font-headline text-lg">
                  {cert.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {cert.issuer} &bull; {cert.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
