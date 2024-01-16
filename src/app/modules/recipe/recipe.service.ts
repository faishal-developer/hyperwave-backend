import { Recipe, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import prisma from '../../../shared/prisma';
import { recipeSearchableFields } from './recipe.constant';
import { IRecipeFilterableFields, IOptions } from './recipe.interface';

const createRecipes = async (data: Recipe) => {
  const result = await prisma.recipe.create({
    data,
  });

  return result;
};

const getRecipes = async (
  filters: IRecipeFilterableFields,
  options: IOptions
) => {
  options.limit = options?.size || 10;
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: recipeSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        return {
          [key]: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            equals: (filterData as any)[key],
          },
        };
      }),
    });
  }

  const whereConditions: Prisma.RecipeWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.recipe.findMany({
    where: whereConditions,
    skip,
    take: limit,
  });

  const total = await prisma.recipe.count({
    where: whereConditions,
  });
  console.log(whereConditions['AND']);

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleRecipe = async (id: string): Promise<Recipe | null> => {
  const result = await prisma.recipe.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateSingleRecipe = async (
  id: string,
  data: Partial<Recipe>
): Promise<Recipe | null> => {
  const result = await prisma.recipe.update({
    where: {
      id,
    },
    data,
  });

  return result;
};

const deleteSingleRecipe = async (id: string) => {
  await prisma.recipe.delete({
    where: {
      id,
    },
  });

  return {};
};

export const recipeService = {
  getRecipes,
  createRecipes,
  getSingleRecipe,
  updateSingleRecipe,
  deleteSingleRecipe,
};
