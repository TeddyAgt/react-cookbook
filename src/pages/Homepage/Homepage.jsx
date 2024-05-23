import { useState } from "react";
import Loading from "src/components/Loading/Loading";
import { useFetchRecipes } from "../../hooks";
import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import Search from "./components/Search/Search";
import {
  updateRecipe as updateRecipeOnApi,
  deleteRecipe as deleteRecipeOnApi,
} from "../../API";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { recipesState, selectFilteredRecipes } from "src/state";

function Homepage() {
  const [filter, setFilter] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading] = useFetchRecipes(pageIndex);
  //  = useFetchRecipes(pageIndex);
  const recipes = useRecoilValue(selectFilteredRecipes(filter));
  const setRecipes = useSetRecoilState(recipesState);

  async function updateRecipe(recipeToUpdate) {
    const savedRecipe = await updateRecipeOnApi(recipeToUpdate);
    setRecipes(
      recipes.map((r) => (r._id === savedRecipe._id ? savedRecipe : r))
    );
  }

  async function deleteRecipe(_id) {
    if (await deleteRecipeOnApi(_id)) {
      setRecipes(recipes.filter((r) => r._id !== _id));
    } else {
      throw new Error("La suppression a échouée");
    }
  }

  return (
    <main className={`flex-fill container p-20 d-flex flex-column`}>
      <h1 className="my-30">
        Découvrez nos nouvelles recettes{" "}
        <small className="styles.small"> - {recipes.length}</small>
      </h1>

      <section
        className={`${styles.contentCard} flex-fill mb-20 card p-20 d-flex flex-column`}>
        <Search setFilter={setFilter} />
        {isLoading && !recipes.length ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((recipe) => recipe.title.toLowerCase().startsWith(filter))
              .map((recipe) => (
                <Recipe
                  key={recipe._id}
                  recipe={recipe}
                  updateRecipe={updateRecipe}
                  deleteRecipe={deleteRecipe}
                />
              ))}
          </div>
        )}
        <div className="d-flex justify-content-center align-items-center p-20">
          <button
            onClick={() => setPageIndex(pageIndex + 1)}
            className="btn btn--primary">
            Charger plus de recettes
          </button>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
