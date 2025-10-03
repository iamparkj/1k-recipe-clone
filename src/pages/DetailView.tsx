import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeInfo from "../components/RecipeInfo";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeInstructions from "../components/RecipeInstructions";
import RecipeOverview from "../components/RecipeOverview";
import type { SingleRecipe } from "../types";

async function getRecipe(id: number): Promise<SingleRecipe> {
  const url = `https://dummyjson.com/recipes/${id}`;
  const response = await fetch(url);

  if (response.ok) {
    const data = (await response.json()) as SingleRecipe;
    return data;
  } else {
    throw new Error("Fetch failure");
  }
}

const DetailView = () => {
  const { id } = useParams();
  const [res, setRes] = useState<SingleRecipe | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getRecipe(Number(id));
      setRes(res);
    };

    fetchData();
  });

  return (
    <div className="p-20 flex flex-col justify-center gap-12">
      <RecipeOverview
        name={res?.name ?? ""}
        prepTime={res?.prepTimeMinutes ?? 0}
        cookTime={res?.cookTimeMinutes ?? 0}
        difficulty={res?.difficulty ?? ""}
        tags={res?.tags ?? []}
        image={res?.image ?? ""}
      />
      <RecipeIngredients
        ingredients={res?.ingredients ?? []}
      />
      <RecipeInstructions
        instructions={res?.instructions ?? []}
      />
      <RecipeInfo
        calories={(res?.servings ?? 0) * (res?.caloriesPerServing ?? 0)}
        cuisine={res?.cuisine ?? ""}
        rating={res?.rating ?? 0}
        mealType={res?.mealType ?? ""}
      />
    </div>
  );
}

export default DetailView;
