import { RecipeI } from "src/interfaces";
import styles from "./Recipe.module.scss";
import { ObjectId } from "src/types";
import { MouseEvent } from "react";

function Recipe({
  recipe,
  updateRecipe,
  deleteRecipe,
}: {
  recipe: RecipeI;
  updateRecipe: (x: RecipeI) => Promise<void>;
  deleteRecipe: (x: ObjectId) => Promise<void>;
}) {
  function handleClickLikeRecipe() {
    updateRecipe({
      ...recipe,
      liked: !recipe.liked,
    });
  }

  function handleClickDeleteRecipe(e: MouseEvent<HTMLElement>) {
    e.stopPropagation();
    deleteRecipe(recipe._id);
  }

  return (
    <article
      onClick={handleClickLikeRecipe}
      className={styles.recipe}>
      <i
        onClick={handleClickDeleteRecipe}
        className="fa-solid fa-xmark"></i>

      <div className={styles.imageContainer}>
        <img
          src={recipe.image}
          alt=""
        />
      </div>
      <div className={`${styles.recipeTitle} flex-center flex-column`}>
        <h3 className="mb-10">{recipe.title}</h3>
        <i
          className={`fa-solid fa-heart ${
            recipe.liked ? "text-primary" : ""
          }`}></i>
      </div>
    </article>
  );
}

export default Recipe;
