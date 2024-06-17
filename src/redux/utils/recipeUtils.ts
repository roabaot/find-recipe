import fetchData from "@/api/axios";
import { extractRecipeData } from "@/utils/helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

const APP_ID = import.meta.env.VITE_Application_ID;
const APP_KEY = import.meta.env.VITE_Application_Keys;

interface FetchRecipesResponse {
  data: any[];
  nextPage: string | null;
}

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (queryText: string = "chicken") => {
    try {
      // search chicken recipes by default
      const res = await fetchData(
        `?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=${queryText}`
      );
      const data = res?.data || [];
      let recipesData = extractRecipeData(data);
      return recipesData as FetchRecipesResponse;
    } catch (error) {
      throw Error("Faild to fetch recipes.");
    }
  }
);
