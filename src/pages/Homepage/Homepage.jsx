import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { data } from "../../data/recipes";
import { useState } from "react";

function Homepage() {
  const recipes = data;
  const [filter, setFilter] = useState("");

  function handleInputSearch(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <main className={`flex-fill container p-20`}>
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>

      <section className={`${styles.contentCard} card p-20 d-flex flex-column`}>
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
      </section>
    </main>
  );
}

export default Homepage;
