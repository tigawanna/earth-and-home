import { z } from "zod";

// Property listing schema
export const propertySchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  price: z.coerce.number().positive("Price must be a positive number"),
  location: z.string().min(3, "Location is required"),
  propertyType: z.enum(["house", "apartment", "condo", "townhouse", "land", "commercial"], {
    errorMap: () => ({ message: "Please select a valid property type" }),
  }),
  bedrooms: z.coerce.number().int().min(0, "Number of bedrooms must be 0 or more").optional(),
  bathrooms: z.coerce.number().min(0, "Number of bathrooms must be 0 or more").optional(),
  squareFeet: z.coerce.number().positive("Square footage must be a positive number").optional(),
  yearBuilt: z.coerce.number().int().min(1800, "Year built must be 1800 or later").max(
    new Date().getFullYear(), 
    `Year built cannot be in the future (max: ${new Date().getFullYear()})`
  ).optional(),
  features: z.array(z.string()).optional(),
  images: z.array(
    z.object({
      url: z.string().url("Please provide a valid image URL"),
      alt: z.string().optional(),
    })
  ).min(1, "At least one image is required"),
  status: z.enum(["for-sale", "for-rent", "sold", "pending"], {
    errorMap: () => ({ message: "Please select a valid status" }),
  }),
  contactEmail: z.string().email("Please provide a valid email address"),
  contactPhone: z.string().regex(/^\+?[0-9\s\-\(\)]{7,20}$/, "Please provide a valid phone number"),
});

export type PropertyFormValues = z.infer<typeof propertySchema>;

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  phone: z.string().regex(/^\+?[0-9\s\-\(\)]{7,20}$/, "Please provide a valid phone number").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;