import styles from "./Recipe.module.scss";
import picture from "../assets/images/food-1.jpg";

function Recipe() {
  return (
    <article className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={picture} alt="" />
      </div>
      <div className={`${styles.recipeTitle} flex-center`}>
        <h3>Grillades</h3>
      </div>
    </article>
  );
}

export default Recipe;
