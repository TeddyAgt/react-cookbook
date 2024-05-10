import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { useContext, useEffect, useState } from "react";

function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const BASE_API_URL = useContext(ApiContext);

  useEffect(() => {
    let cancel = false;

    async function fetchRecipes() {
      setIsLoading(true);

      try {
        const response = await fetch(BASE_API_URL);

        if (response.ok && !cancel) {
          const recipes = await response.json();

          setRecipes(Array.isArray(recipes) ? recipes : [recipes]);
        } else {
          console.log("Erreur");
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
  }, [BASE_API_URL]);

  function handleInputSearch(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <main className={`flex-fill container p-20 d-flex flex-column`}>
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>

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
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((recipe) => recipe.title.toLowerCase().startsWith(filter))
              .map((recipe) => (
                <Recipe
                  key={recipe._id}
                  title={recipe.title}
                  image={recipe.image}
                />
              ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Homepage;
