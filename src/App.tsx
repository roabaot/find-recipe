import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ViewHome,
  ViewRecipeList,
  ViewRecipeSingle,
  ViewRecipeSearch,
  ViewTypeList,
  ViewError,
} from "./views";
import BaseLayout from "./layouts/BaseLayout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ViewError />,
    children: [
      {
        path: "/",
        element: <ViewHome />,
      },
      {
        path: "/recipes/:typeOf/:typeName",
        element: <ViewRecipeList />,
      },
      {
        path: "/recipes/:id",
        element: <ViewRecipeSingle />,
      },
      {
        path: "/recipes/search",
        element: <ViewRecipeSearch />,
      },
      {
        path: "/types/:typeId",
        element: <ViewTypeList />,
      },
      {
        path: "*",
        element: <ViewError />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
