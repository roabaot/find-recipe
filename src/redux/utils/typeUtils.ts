import { createAsyncThunk } from "@reduxjs/toolkit";
import { extractRecipeData } from "@/utils/helpers";
import fetchData from "@/api/axios";

const APP_ID = import.meta.env.VITE_Application_ID;
const APP_KEY = import.meta.env.VITE_Application_Keys;

interface objProbs {
  typeData: {
    typeOf: string;
    typeName: string;
  };
  nextPageLink: string | null;
}

interface FetchTypeRecipesResponse {
  data: any[];
  nextPage: string | null;
}

export const fetchTypesRecipes = createAsyncThunk<
  FetchTypeRecipesResponse,
  objProbs
>("recipes/type/fetchRecipes", async (obj: objProbs) => {
  const { typeData, nextPageLink } = obj;
  let recipesData = null;

  // if the given fetch request is not a link & doesn't have type=public information
  console.log("obj: ", obj);

  if (!(Object.keys(typeData).length == 0)) {
    const res = await fetchData(
      `?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&${typeData.typeOf}Type=${typeData.typeName}`
    );

    const data = res?.data || [];
    recipesData = extractRecipeData(data);
  } else {
    // if case of the next page fetch link where we already have type information as well
    console.log("`${nextPageLink}`: ", `${nextPageLink}`);
    const res = await fetchData(`${nextPageLink}`);
    console.log("res: ", res);
    const data = res?.data || [];
    recipesData = extractRecipeData(data);
  }

  return recipesData;
});
