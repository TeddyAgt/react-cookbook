import { Outlet } from "react-router-dom";
import AdminRecipesNavigation from "./components/AdminRecipesNavigation/AdminRecipesNavigation";
import { Suspense } from "react";

function AdminRecipes() {
  return (
    <section className="flex flex-column">
      <h1
        className="mb-20
      ">
        Gestion des recettes
      </h1>

      <div className="flex-fill d-flex flex-column">
        <AdminRecipesNavigation />

        <article className="flex-fill d-flex flex-column">
          <Suspense>
            <Outlet />
          </Suspense>
        </article>
      </div>
    </section>
  );
}

export default AdminRecipes;
