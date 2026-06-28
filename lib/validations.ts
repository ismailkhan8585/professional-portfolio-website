import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  projectType: z.enum(['Freelance Project', 'Job Opportunity', 'AI Video/Social Media', 'Other']),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  website: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
