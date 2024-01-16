export type IRecipeFilterableFields = {
  id?: string;
  searchTerm?: string;
};

export type IRecipeSearchableFields = {
  title?: string;
  description?: string;
  instructions?: string;
  ingredients?: string;
};

export type IOptions = {
  page?: number;
  size?: number;
  limit?: number;
  skip?: number;
  sortBy?: string;
  sortOrder?: string;
};
