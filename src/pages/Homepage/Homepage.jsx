import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { useContext, useEffect, useState } from "react";

function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const BASE_API_URL = useContext(ApiContext);

  useEffect(() => {
    let cancel = false;

    async function fetchRecipes() {
      setIsLoading(true);

      try {
        console.log("fetch");
        const response = await fetch(
          `${BASE_API_URL}?skip=${pageIndex * 18}&limit=18`
        );

        if (response.ok && !cancel) {
          const newRecipes = await response.json();

          setRecipes((x) => {
            return Array.isArray(newRecipes)
              ? [...x, ...newRecipes]
              : [...x, newRecipes];
          });
        } else {
          console.log("Error, or cancel ===", cancel);
        }
      } catch (e) {
        console.log(e);
      } finally {
        if (!cancel) setIsLoading(false);
      }
    }
    fetchRecipes();
    return () => {
      cancel = true;
    };
  }, [BASE_API_URL, pageIndex]);

  function updateRecipe(recipeToUpdate) {
    setRecipes(
      recipes.map((r) => (r._id === recipeToUpdate._id ? recipeToUpdate : r))
    );
  }

  function handleInputSearch(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <main className={`flex-fill container p-20 d-flex flex-column`}>
      <h1 className="my-30">
        Découvrez nos nouvelles recettes{" "}
        <small className="styles.small"> - {recipes.length}</small>
      </h1>

      <section
        className={`${styles.contentCard} flex-fill mb-20 card p-20 d-flex flex-column`}>
        <div
          className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}>
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onInput={handleInputSearch}
            type="text"
            placeholder="Rechercher..."
            className="flex-fill"
          />
        </div>
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
