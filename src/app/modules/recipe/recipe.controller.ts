import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { recipeService } from './recipe.service';
import { recipeFilterableFields } from './recipe.constant';

const createRecipes = catchAsync(async (req: Request, res: Response) => {
  const result = await recipeService.createRecipes(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OK',
    data: result,
  });
});

const getRecipes = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, recipeFilterableFields);
  const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
  const result = await recipeService.getRecipes(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OK',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleRecipe = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await recipeService.getSingleRecipe(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OK',
    data: result,
  });
});

const updateSingleRecipe = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const result = await recipeService.updateSingleRecipe(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OK',
    data: result,
  });
});

const deleteSingleRecipe = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  await recipeService.deleteSingleRecipe(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Recipe deleted successfully',
    data: {},
  });
});

export const recipeController = {
  createRecipes,
  getRecipes,
  getSingleRecipe,
  updateSingleRecipe,
  deleteSingleRecipe,
};
