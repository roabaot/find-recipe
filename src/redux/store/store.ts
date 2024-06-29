import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipesSlice";
import typesReducer from "./typesSlice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  types: typesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
