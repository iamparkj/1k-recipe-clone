import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import type { MultipleRecipes, SinglePreview } from "./types";

const CARDS_PER_PAGE = 12;

async function getRecipes(
  page: number,
  limit: number
): Promise<MultipleRecipes> {
  const skip = page === 1 ? 0 : (page - 1) * limit;
  const url = `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}&select=name,difficulty,tags,image`;
  const response = await fetch(url);

  if (response.ok) {
    const data = (await response.json()) as MultipleRecipes;
    return data;
  } else {
    throw new Error("Fetch failure");
  }
}

const MainView = () => {
  const [page, setPages] = useState(1);
  const [res, setRes] = useState<MultipleRecipes | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getRecipes(page, CARDS_PER_PAGE);
      setRes(res);
    };

    fetchData();
  });

  const totalCards = res?.total ?? 0;
  const numPages = totalCards === 0 ? 1 : Math.ceil(totalCards / CARDS_PER_PAGE);

  return (
    <div className="py-20 flex justify-center-safe">
      <div className="flex flex-col gap-6">
        <div className="grid md:grid-cols-3 gap-6">
          {
            res?.recipes.map((recipe: SinglePreview) => (
              <RecipeCard
                name={recipe.name}
                difficulty={recipe.difficulty}
                tags={recipe.tags}
                image={recipe.image}
              />
            ))
          }
        </div>
        {/* TODO: Add a pagination */}
      </div>
    </div>
  );
}

export default MainView;
