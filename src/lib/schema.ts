import z from "zod";

export const snackSchema = z.object({
  name: z.string(),
  description: z.string(),
  recipe: z.string(),
  image: z.string(),
});
export const snackFileSchema = z.object({ snacks: z.array(snackSchema) });

export type Snack = z.infer<typeof snackSchema>;
