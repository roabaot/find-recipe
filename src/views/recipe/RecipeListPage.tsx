import { Breadcrumb, Loading, PageTitle, Select } from "@/components/common";
import { RecipeList } from "@/components/recipe";
import { recipe } from "@/components/recipe/RecipeList";
import { useAppDispatch } from "@/redux/store/store";
import {
  getTypesRecipesError,
  getTypesRecipesNextPage,
  getTypesRecipesStatus,
  selectTypesAllRecipes,
} from "@/redux/store/typesSlice";
import { fetchTypesRecipes } from "@/redux/utils/typeUtils";
import { scrollToTop } from "@/utils/scrollToTop";
import { STATUS } from "@/utils/status";
import { useState, ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RecipeListPage = () => {
  const { typeOf, typeName } = useParams();
  const [typeData, setTypeData] = useState({
    typeName: typeName || "",
    typeOf: typeOf || "",
  });
  const dispatch = useAppDispatch();
  const recipes = useSelector(selectTypesAllRecipes);
  const recipesStatus = useSelector(getTypesRecipesStatus);
  const recipesError = useSelector(getTypesRecipesError);
  const nextPageLink = useSelector(getTypesRecipesNextPage);

  const handelSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setTypeData((prev) => {
      return {
        ...prev,
        typeName: e.target.value,
      };
    });
  };

  useEffect(() => {
    dispatch(fetchTypesRecipes({ typeData, nextPageLink }));
  }, [typeData, dispatch]);

  useEffect(() => scrollToTop(), []);

  return (
    <main className="recipe-list-page custom-min-h pt-[4px]">
      <section>
        <PageTitle titleData={typeData} />
        <div className="container">
          <div className="breadcrumb-select-wrapper">
            <Breadcrumb breadcrumbData={typeData} />
            <Select typeData={typeData} handelSelection={handelSelection} />
          </div>
        </div>

        <div className="recipes-list">
          <div className="container">
            {STATUS.LOADING == recipesStatus ? (
              <Loading />
            ) : STATUS.FAILED === recipesStatus ? (
              recipesError
            ) : (
              <RecipeList recipes={recipes as recipe[]} />
            )}

            {nextPageLink!?.length > 0 && (
              <div className="next-button">
                <button
                  className="next-page-btn"
                  type="button"
                  onClick={() =>
                    dispatch(
                      fetchTypesRecipes({
                        typeData: {} as { typeOf: string; typeName: string },
                        nextPageLink,
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

export default RecipeListPage;
