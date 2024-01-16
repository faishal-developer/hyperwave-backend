import { z } from 'zod';

export const types = ['radio', 'checkbox'];

export const recipeType = {
  title: z.string({
    required_error: 'title is required',
  }),
  image: z.string({
    required_error: 'image is required',
  }),
  description: z.string({
    required_error: 'description is required',
  }),
  instructions: z.string({
    required_error: 'instructions is required',
  }),
  ingredients: z.string({
    required_error: 'ingredients is required',
  }),
};

const create = z.object({
  body: z.object({
    ...recipeType,
  }),
});

const update = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    instructions: z.string().optional(),
    ingredients: z.string().optional(),
  }),
});

export const recipeZodSchema = {
  create,
  update,
};
