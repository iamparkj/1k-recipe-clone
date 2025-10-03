type RecipeInstructionsProp = {
  instructions: string[];
};

const RecipeInstructions = ({ instructions }: RecipeInstructionsProp) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <p className="text-2xl font-semibold">레시피</p>
      <ol className="text-sm list-decimal list-inside space-y-2">
        {instructions.map((line, index) => (
          <li key={`step-${index}`}>{line}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeInstructions;
