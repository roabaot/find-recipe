import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { STATUS } from "@/utils/status";
import { fetchRecipes, fetchSearchRecipe } from "../utils/recipeUtils";
import { RootState } from "./store";

interface SearchResult {
  id: string;
  name: string;
  image: string;
  images: {};
  source: string;
  source_url: string;
  healthLabels: any;
  ingredientLines: any;
  ingredients: any[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: any[];
  mealType: any[];
  nutrients: {};
}

const recipesAdapter = createEntityAdapter({});

const initialState = recipesAdapter.getInitialState({
  error: null as string | null,
  status: "IDEL",
  nextPage: null as string | null,
  searchResult: [] as SearchResult[],
  searchQuery: "",
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },

    clearSearch(state) {
      state.searchResult = [];
    },
  },
  extraReducers(builder) {
    builder
      // handle fetching of all recipes
      .addCase(fetchRecipes.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.nextPage = action.payload.nextPage;
        recipesAdapter.upsertMany(state, action.payload.data);
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message || "An error occurred";
      })

      // handle recipe search by search terms
      .addCase(fetchSearchRecipe.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchSearchRecipe.fulfilled, (state, action) => {
        state.searchResult = action.payload.data;
        state.nextPage = action.payload.nextPage;
        state.status = STATUS.SUCCEEDED;
      })
      .addCase(fetchSearchRecipe.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const { selectAll: selectAllRecipes } = recipesAdapter.getSelectors(
  (state: RootState) => state.recipes
);

export const getRecipesStatus = (state: RootState) => state.recipes.status;

export const getRecipesError = (state: RootState) => state.recipes.error;

export const getRecipesNextPage = (state: RootState) => state.recipes.nextPage;

export const getSearchQuery = (state: RootState) => state.recipes.searchQuery;

export const selectSearchResult = (state: RootState) =>
  state.recipes.searchResult;

export const { setSearchQuery, clearSearch } = recipesSlice.actions;

export default recipesSlice.reducer;
