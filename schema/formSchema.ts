import { z } from 'zod';

export const formSchema = z.object({
	username: z.string().min(3).max(50),
	email: z.string().email(),
	password: z.string().min(6).max(20),
});
export type FormSchemaTypes = z.infer<typeof formSchema>;
