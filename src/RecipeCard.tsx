import type { SinglePreview } from './types';

const RecipeCard = (props: SinglePreview) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="aspect-video rounded-t-lg" src={props.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h6>
          <p>{props.difficulty}</p>
        </a>
        { /* TODO: Render tags of the recipe */ }
      </div>
    </div>
  );
};

export default RecipeCard;
