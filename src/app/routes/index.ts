import express from 'express';
import { RecipeRoutes } from '../modules/recipe/recipe.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/recipe',

    route: RecipeRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
