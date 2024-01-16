"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeZodSchema = exports.recipeType = exports.types = void 0;
const zod_1 = require("zod");
exports.types = ['radio', 'checkbox'];
exports.recipeType = {
    title: zod_1.z.string({
        required_error: 'title is required',
    }),
    image: zod_1.z.string({
        required_error: 'image is required',
    }),
    description: zod_1.z.string({
        required_error: 'description is required',
    }),
    instructions: zod_1.z.string({
        required_error: 'instructions is required',
    }),
    ingredients: zod_1.z.string({
        required_error: 'ingredients is required',
    }),
};
const create = zod_1.z.object({
    body: zod_1.z.object(Object.assign({}, exports.recipeType)),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        instructions: zod_1.z.string().optional(),
        ingredients: zod_1.z.string().optional(),
    }),
});
exports.recipeZodSchema = {
    create,
    update,
};
