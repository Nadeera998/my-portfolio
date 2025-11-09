import Link from "next/link";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const { name, title, aboutMe, contact } = portfolioData;
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero");

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center hero-glow"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 lg:py-24">
        <div className="flex flex-col items-start text-center md:text-left">
          <h1 className="mb-4 font-headline text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {name}
          </h1>
          <p className="mb-6 text-xl font-medium text-primary">{title}</p>
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
            {aboutMe.substring(0, 150)}...
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button size="lg" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            {contact.socials.map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="icon"
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full shadow-2xl md:h-80 md:w-80 lg:h-96 lg:w-96">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={`A professional portrait of ${name}`}
              fill
              priority
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
