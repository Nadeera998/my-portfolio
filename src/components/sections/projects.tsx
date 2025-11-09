import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding fade-in-up" style={{ animationDelay: '0.5s' }}>
      <div className="container mx-auto">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.image);
            return (
              <Card key={project.name} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-56 w-full bg-muted">
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={`Screenshot of ${project.name}`}
                      fill
                      className="object-contain"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.name}</CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
