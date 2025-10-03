import type { SinglePreview } from './types';

const RecipeCard = (
  { name, difficulty, tags, image }: SinglePreview
) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="aspect-2/1 w-full rounded-t-lg object-cover" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h6>
          <p>{difficulty}</p>
        </a>
        { /* TODO: Render tags of the recipe */ }
      </div>
    </div>
  );
};

export default RecipeCard;
