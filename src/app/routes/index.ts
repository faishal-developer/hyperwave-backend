import express from 'express';
import { RecipeRoutes } from '../modules/recipe/recipe.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/recipe',
    route: RecipeRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
