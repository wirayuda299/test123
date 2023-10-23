import * as z from 'zod';

export const CreatePostSchema = z.object({
  title: z.string().min(5).max(130),
  post: z.string().min(100),
  createType: z.string(),
  tags: z.array(z.string().min(1).max(15)).min(1).max(5),
});
