"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const recipe_controller_1 = require("./recipe.controller");
const recipe_zod_1 = require("./recipe.zod");
const router = express_1.default.Router();
router.post('/create-recipe', (0, validateRequest_1.default)(recipe_zod_1.recipeZodSchema.create), recipe_controller_1.recipeController.createRecipes);
router.patch('/:id', (0, validateRequest_1.default)(recipe_zod_1.recipeZodSchema.update), recipe_controller_1.recipeController.updateSingleRecipe);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), recipe_controller_1.recipeController.deleteSingleRecipe);
router.get('/:id', recipe_controller_1.recipeController.getSingleRecipe);
router.get('/', recipe_controller_1.recipeController.getRecipes);
exports.RecipeRoutes = router;
