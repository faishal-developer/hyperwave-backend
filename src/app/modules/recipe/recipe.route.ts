import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { recipeController } from './recipe.controller';
import { recipeZodSchema } from './recipe.zod';

const router = express.Router();

router.post(
  '/create-recipe',
  validateRequest(recipeZodSchema.create),
  recipeController.createRecipes
);

router.patch(
  '/:id',
  validateRequest(recipeZodSchema.update),
  recipeController.updateSingleRecipe
);

router.delete('/:id', recipeController.deleteSingleRecipe);
router.get('/:id', recipeController.getSingleRecipe);
router.get('/', recipeController.getRecipes);

export const RecipeRoutes = router;
