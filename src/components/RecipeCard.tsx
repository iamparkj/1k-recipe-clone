import { Link } from 'react-router-dom';
import type { SinglePreview } from './types';

const RecipeCard = (
  { id, name, difficulty, tags, image }: SinglePreview
) => {
  return (
    <div key={`card-${id}`} className="max-w-sm bg-white rounded-2xl">
      <Link to={`recipe/${id}`}>
        <img className="aspect-2/1 w-full rounded-t-2xl object-cover" src={image} alt="" />
      </Link>
      <div className="px-4 pt-4 pb-2 flex place-content-between items-center">
        <Link to={`recipe/${id}`}>
          <span className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            {name}
          </span>
        </Link>
        <span className="text-sm text-[#3478f6]">
          {difficulty}
        </span>
      </div>
      <div className="px-4 pb-4 flex place-content-start gap-2 overflow-hidden">
        {
          tags.map((tag: string) => (
            <div className="rounded-sm border border-[#efeff0]">
              <p className="mx-2 my-0.5 text-xs text-[#5c625e] truncate">
                {tag}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default RecipeCard;
