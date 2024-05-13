import { lazy } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { getRecipe } from "./API";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const AdminRecipes = lazy(() =>
  import("./pages/Admin/pages/AdminRecipes/AdminRecipes")
);
const AdminUsers = lazy(() =>
  import("./pages/Admin/pages/AdminUsers/AdminUsers")
);
const AdminRecipesList = lazy(() =>
  import(
    "./pages/Admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList"
  )
);
const AdminRecipeForm = lazy(() =>
  import(
    "./pages/Admin/pages/AdminRecipes/pages/AdminRecipeForm/AdminRecipeForm"
  )
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            index: true,
            loader: async () => redirect("recipes"),
          },
          {
            path: "recipes",
            element: <AdminRecipes />,
            children: [
              {
                index: true,
                loader: async () => redirect("list"),
              },
              {
                path: "list",
                element: <AdminRecipesList />,
              },
              {
                path: "new",
                element: <AdminRecipeForm />,
              },
              {
                path: "edit/:recipeId",
                loader: async ({ params: { recipeId } }) => getRecipe(recipeId),
                element: <AdminRecipeForm />,
              },
            ],
          },
          {
            path: "users",
            element: <AdminUsers />,
          },
        ],
      },
    ],
  },
]);
