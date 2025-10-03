export type SinglePreview = {
  name: string;
  difficulty: string;
  tags: string[];
  image: string;
}

export type SingleRecipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: string[];
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[]
}

export type MultipleRecipes = {
  recipes: SinglePreview[];
  total: number;
  skip: number;
  limit: number
}
