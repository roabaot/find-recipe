import RecipeItem from "./RecipeItem";

export interface recipe {
  id: string;
  image?: string;
  name: string;
  cuisineType?: any[string];
  mealType?: any[string];
}

interface RecipeListProps {
  recipes: recipe[];
  recipesLength?: number;
}

const RecipeList = ({ recipes, recipesLength = 20 }: RecipeListProps) => {
  return (
    <div className="recipe-list">
      {recipes?.slice(0, recipesLength).map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
