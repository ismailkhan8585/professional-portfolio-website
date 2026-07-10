import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  projectType: z.enum(
    ['Freelance Project', 'Job Opportunity', 'AI Video/Social Media', 'Other'],
    {
      required_error: 'Project type is required',
    }
  ),
  budget: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
  website: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
