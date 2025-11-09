"use server";

import { z } from "zod";
import { Resend } from "resend";
import { portfolioData } from "@/lib/data";
import { ContactEmailTemplate } from "@/components/contact-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

// Schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const data = await resend.emails.send({
      from: 'Nadeera Lakshan <onboarding@resend.dev>',
      to: [portfolioData.contact.email],
      subject: `New message from ${name} via your portfolio`,
      reply_to: email,
      react: ContactEmailTemplate({ name, email, message })
    });

    if (data.error) {
      return { message: "Failed to send message.", errors: null };
    }

    return {
      message: `Thank you, ${name}! Your message has been sent.`,
      errors: null,
    };
  } catch (error) {
    return { message: "Failed to send message.", errors: null };
  }
}
