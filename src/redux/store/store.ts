import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipesSlice";

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
