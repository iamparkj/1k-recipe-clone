type RecipeOverviewProp = {
  name: string;
  prepTime: number;
  cookTime: number;
  difficulty: string;
  tags: string[];
  image: string
}

const RecipeOverview = (
  {
    name,
    prepTime,
    cookTime,
    difficulty,
    tags,
    image
  }: RecipeOverviewProp
) => {
  return (
    <div className="flex h-64 gap-6">
      <img className="h-fill w-64 rounded-lg object-cover" src={image} />
      <div className="flex flex-col justify-between h-fill">
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 items-center">
            <p className="text-2xl font-semibold">
              {name}
            </p>
            <p className="text-sm text-[#3478f6]">
              {difficulty}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="pb-3 text-sm font-semibold">
              총 요리시간 {prepTime + cookTime}분
            </p>
            <p className="text-sm">
              준비시간 {prepTime}분
            </p>
            <p className="text-sm">
              조리시간 {cookTime}분
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          {
            tags.map((tag: string) => (
              <div className="rounded-sm border border-[#efeff0]">
                <p className="mx-2 my-0.5 text-xs text-[#5c625e]">
                  {tag}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default RecipeOverview;
