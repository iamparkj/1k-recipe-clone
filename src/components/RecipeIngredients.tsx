type RecipeIngredientsProp = {
  ingredients: string[]
}

const RecipeIngredients = (
  { ingredients }: RecipeIngredientsProp
) => {
  return (
    <div className="flex h-32 rounded-lg bg-[#ebedf0]">
      <div className="px-6 flex flex-col justify-center gap-4">
        <p className="text-2xl font-semibold">
          재료
        </p>
        <p className="text-sm">
          {ingredients.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default RecipeIngredients;
