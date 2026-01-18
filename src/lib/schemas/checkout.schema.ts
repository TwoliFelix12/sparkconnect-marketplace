import { z } from 'zod';

export const checkoutSchema = z.object({
  customerName: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),

  customerEmail: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .trim(),

  customerPhone: z
    .string()
    .regex(
      /^(\+254|0|254)[17]\d{8}$/,
      'Please enter a valid Kenya phone number (e.g., +254712345678 or 0712345678)'
    )
    .transform((val) => {
      // Normalize to +254 format
      const clean = val.replace(/\s+/g, '');
      if (clean.startsWith('0')) {
        return `+254${clean.substring(1)}`;
      }
      if (clean.startsWith('254')) {
        return `+${clean}`;
      }
      return clean;
    }),

  customerAddress: z
    .string()
    .min(10, 'Please provide a detailed delivery address')
    .max(500, 'Address must be less than 500 characters')
    .trim(),

  notes: z
    .string()
    .max(1000, 'Notes must be less than 1000 characters')
    .trim()
    .optional()
    .transform((val) => val || undefined),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

// Contact form schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),

  email: z
    .string()
    .email('Please enter a valid email address')
    .trim(),

  phone: z
    .string()
    .optional(),

  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters')
    .trim(),

  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
