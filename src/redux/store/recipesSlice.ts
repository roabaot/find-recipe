import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { STATUS } from "@/utils/status";
import { fetchRecipes } from "../utils/recipeUtils";
import { RootState } from "./store";

const recipesAdapter = createEntityAdapter({});

const initialState = recipesAdapter.getInitialState({
  error: null as string | null,
  status: "IDEL",
  nextPage: null as string | null,
  searchResult: null,
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
      });
  },
});

export const { selectAll: selectAllRecipes } = recipesAdapter.getSelectors(
  (state: RootState) => state.recipes
);

export const getRecipesStatus = (state: RootState) => state.recipes.status;

export const getRecipesError = (state: RootState) => state.recipes.error;

export default recipesSlice.reducer;
