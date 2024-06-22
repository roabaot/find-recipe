import {
  BinnerSilder,
  CategorySlider,
  Loading,
  MealSlider,
  Title,
} from "@/components/common";
import { dishTypeData } from "@/data";
import { pattern_one } from "@/utils/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRecipes } from "@/redux/utils/recipeUtils";
import {
  getRecipesError,
  getRecipesStatus,
  selectAllRecipes,
} from "@/redux/store/recipesSlice";
import { useAppDispatch } from "@/redux/store/store";
import { STATUS } from "@/utils/status";
import { RecipeList } from "@/components/recipe";
import { recipe } from "@/components/recipe/RecipeList";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const recipes = useSelector(selectAllRecipes);
  const recipesStatus = useSelector(getRecipesStatus);
  const recipesError = useSelector(getRecipesError);

  console.log("recipes: ", recipes);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchRecipes("chicken"));
    };
    fetchData();
  }, [dispatch]);
  return (
    <main className="home-page custom-min-h pt-[4px]">
      <BinnerSilder />
      <section
        className="categories"
        style={{ background: `url('${pattern_one}') center/cover no-repeat` }}
      >
        <div className="container">
          <Title subTitle="Choose a Category" mainTitle="Recipe Categories" />
        </div>
        <CategorySlider />
      </section>

      <section className="showcase-recipes">
        <div className="container">
          <Title subTitle="Some Recipes" mainTitle="chicken Recipes" />
          {/* { recipes list } */}

          {STATUS.LOADING == recipesStatus ? (
            <Loading />
          ) : STATUS.FAILED == recipesStatus ? (
            <div>{recipesError}</div>
          ) : (
            <RecipeList recipes={recipes as recipe[]} recipesLength={12} />
          )}
        </div>
      </section>

      <section className="dishes">
        <div className="container">
          <Title subTitle="Find Dishes you love" mainTitle="Recipe Dishes" />
          <div className="dishes-list">
            {dishTypeData?.map((dish, index) => (
              <Link
                key={index}
                to={`recipes/dish/${dish?.type}`}
                className="dishes-item"
              >
                <img src={dish.image} alt={dish.type} />
                <p className="dishes-item-name">{dish?.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="meals">
        <div className="container">
          <Title subTitle="Get Meal Ready" mainTitle="Recipe Meals" />
          <MealSlider />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
