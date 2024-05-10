import styles from "./Recipe.module.scss";
import { useState } from "react";

function Recipe({ title, image }) {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  return (
    <article
      onClick={handleClick}
      className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt=""
        />
      </div>
      <div className={`${styles.recipeTitle} flex-center flex-column`}>
        <h3 className="mb-10">{title}</h3>
        <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
      </div>
    </article>
  );
}

export default Recipe;
