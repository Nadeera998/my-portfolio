"use client";

import Link from "next/link";
import { Menu, Code, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigationLinks, portfolioData } from "@/lib/data";
import React from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b bg-background/80 backdrop-blur-sm"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <rect width="32" height="32" rx="8" fill="currentColor" />
            <text
              x="50%"
              y="50%"
              dy=".3em"
              textAnchor="middle"
              fill="hsl(var(--primary-foreground))"
              fontSize="16"
              fontFamily="var(--font-space-grotesk)"
              fontWeight="bold"
            >
              NL
            </text>
          </svg>
          <span className="font-headline text-lg font-bold">
            {portfolioData.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => (
            <Button key={link.name} variant="ghost" asChild>
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:flex">
             <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-2">
                  {navigationLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="ghost"
                      asChild
                      className="justify-start"
                      onClick={() => setOpen(false)}
                    >
                      <Link href={link.href}>
                        <link.icon className="mr-2 h-4 w-4" />
                        {link.name}
                      </Link>
                    </Button>
                  ))}
                   <Button asChild className="mt-4">
                     <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
