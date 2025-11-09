import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "../ui/card";

export function About() {
  const { aboutMe, name } = portfolioData;
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about');

  return (
    <section id="about" className="section-padding bg-muted/50 fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto">
        <h2 className="mb-10 text-center font-headline text-3xl font-bold md:text-4xl">
          About Me
        </h2>
        <Card className="overflow-hidden">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="relative h-64 w-full md:h-full">
               {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={`An image of ${name}`}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
            <div className="p-8 md:col-span-2 md:p-10">
              <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                {aboutMe}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
