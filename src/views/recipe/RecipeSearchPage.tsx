import { Loading } from "@/components/common";
import { RecipeList } from "@/components/recipe";
import {
  clearSearch,
  getRecipesError,
  getRecipesNextPage,
  getRecipesStatus,
  getSearchQuery,
  selectSearchResult,
} from "@/redux/store/recipesSlice";
import { useAppDispatch } from "@/redux/store/store";
import { fetchSearchRecipe } from "@/redux/utils/recipeUtils";
import { no_results } from "@/utils/images";
import { scrollToTop } from "@/utils/scrollToTop";
import { STATUS } from "@/utils/status";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const RecipeSearchPage = () => {
  const dispatch = useAppDispatch();
  const queryText = useSelector(getSearchQuery);
  const searchRecipes = useSelector(selectSearchResult);
  const searchStatus = useSelector(getRecipesStatus);
  const searchError = useSelector(getRecipesError);
  const nextPageLink = useSelector(getRecipesNextPage);

  useEffect(() => scrollToTop(), []);

  useEffect(() => {
    dispatch(fetchSearchRecipe({ queryText, nextPageLink }));
  }, [queryText, dispatch]);

  if (!searchRecipes || searchRecipes.length === 0) {
    return (
      <div className="container py-8 custom-min-h no-results-msg">
        <img src={no_results} alt="no results image" />
        <p>No search results found!</p>
      </div>
    );
  }

  return (
    <main className="recipe-search-page custom-min-h pt-[4px]">
      <section>
        <div className="recipes-list">
          <div className="container">
            {searchRecipes?.length > 0 && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => dispatch(clearSearch())}
              >
                <span className="clear-btn-icon">
                  <AiOutlineClose />
                </span>{" "}
                Clear Result
              </button>
            )}

            {STATUS.LOADING === searchStatus ? (
              <Loading />
            ) : STATUS.FAILED === searchStatus ? (
              searchError
            ) : (
              <RecipeList recipes={searchRecipes} />
            )}

            {typeof nextPageLink === "string" && nextPageLink?.length > 0 && (
              <div className="next-button">
                <button
                  className="next-page-btn"
                  onClick={() =>
                    dispatch(
                      fetchSearchRecipe({
                        queryText: "",
                        nextPageLink: nextPageLink,
                      })
                    )
                  }
                >
                  Next Page
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecipeSearchPage;
