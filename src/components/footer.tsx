import { portfolioData } from "@/lib/data";
import { Button } from "./ui/button";

export function Footer() {
  const { name, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {contact.socials.map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              size="icon"
              asChild
              aria-label={social.name}
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
