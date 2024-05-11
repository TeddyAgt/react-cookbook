import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import { useFetchData } from "../../hooks";
import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import Search from "./components/Search/Search";
import { useContext, useState } from "react";

function Homepage() {
  const [filter, setFilter] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const BASE_API_URL = useContext(ApiContext);

  const [[recipes, setRecipes], isLoading] = useFetchData(
    BASE_API_URL,
    pageIndex
  );

  function updateRecipe(recipeToUpdate) {
    setRecipes(
      recipes.map((r) => (r._id === recipeToUpdate._id ? recipeToUpdate : r))
    );
  }

  function deleteRecipe(_id) {
    setRecipes(recipes.filter((r) => r._id !== _id));
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
                  toggleRecipeLike={updateRecipe}
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
