"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Mail, Phone, Send } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function Contact() {
  const { contact } = portfolioData;
  const [state, formAction] = useActionState(submitContactForm, { message: null, errors: null });
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state.message && state.errors) {
       toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="section-padding bg-muted/50 fade-in-up" style={{ animationDelay: '0.8s' }}>
      <div className="container mx-auto">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
          Get in Touch
        </h2>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              Have a question or want to work together? Feel free to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a href={`mailto:${contact.email}`} className="hover:underline">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <span>{contact.phone}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {contact.socials.map((social) => (
                <Button key={social.name} variant="outline" size="icon" asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                         <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="Your Name" />
                            {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name}</p>}
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="Your Email" />
                             {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email}</p>}
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" name="message" placeholder="Your Message" />
                            {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message}</p>}
                        </div>
                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
