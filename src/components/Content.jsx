import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipes";

function Content() {
  const recipes = data;

  return (
    <main className={`flex-fill container p-20`}>
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <section className={`${styles.contentCard} card p-20`}>
        <div className={styles.grid}>
          {recipes.map((recipe) => (
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

export default Content;
