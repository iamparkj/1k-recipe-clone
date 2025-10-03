type RecipeInfoProp = {
  calories: number;
  cuisine: string;
  rating: number;
  mealType: string
}

const RecipeInfo = (
  {
    calories,
    cuisine,
    rating,
    mealType
  }: RecipeInfoProp
) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <p className="text-2xl font-semibold">
        요리 정보
      </p>
      <ul className="text-sm list-inside space-y-2">
        <li>유형: {cuisine}</li>
        <li>음식특징: {mealType}</li>
        <li>칼로리: {calories}</li>
        <li>별점: {rating}</li>
      </ul>
    </div>
  );
}

export default RecipeInfo;
