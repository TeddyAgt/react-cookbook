import { useContext } from "react";
import styles from "./Recipe.module.scss";
import { ApiContext } from "../../../../context/ApiContext";

function Recipe({ recipe: { _id, title, image, liked }, toggleRecipeLike }) {
  const BASE_API_URL = useContext(ApiContext);

  async function handleClick() {
    try {
      const response = await fetch(`${BASE_API_URL}/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          liked: !liked,
        }),
      });

      if (response.ok) {
        const updatedRecipe = await response.json();
        toggleRecipeLike(updatedRecipe);
      } else {
        console.log("Error");
      }
    } catch (e) {
      console.log(e);
    }
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
