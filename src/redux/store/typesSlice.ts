import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { STATUS } from "@/utils/status";
import { fetchTypesRecipes } from "../utils/typeUtils";
import { RootState } from "./store";

const typesAdapter = createEntityAdapter({});

const initialState = typesAdapter.getInitialState({
  error: null as string | null,
  status: "IDEL",
  counnt: 0,
  nextPage: null as string | null,
});

const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTypesRecipes.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchTypesRecipes.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        typesAdapter.removeAll(state);
        state.nextPage = action.payload.nextPage;
        typesAdapter.addMany(state, action.payload.data);
      })
      .addCase(fetchTypesRecipes.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const { selectAll: selectTypesAllRecipes } = typesAdapter.getSelectors(
  (state: RootState) => state.types
);

export const getTypesRecipesStatus = (state: RootState) => state.types.status;

export const getTypesRecipesError = (state: RootState) => state.types.error;

export const getTypesRecipesNextPage = (state: RootState) =>
  state.types.nextPage;

export default typesSlice.reducer;
