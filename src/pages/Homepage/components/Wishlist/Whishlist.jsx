import { useRecoilValue, useSetRecoilState } from "recoil";
import styles from "./Wishlist.module.scss";
import {
  recipesState,
  selectWishedRecipes,
  wishlistDisplayState,
} from "src/state";
import { updateRecipe } from "src/API";
import { useState } from "react";

function Wishlist() {
  const setWishlistDisplay = useSetRecoilState(wishlistDisplayState);
  const wishedRecipes = useRecoilValue(selectWishedRecipes);
  const setRecipes = useSetRecoilState(recipesState);
  const [remove, setRemove] = useState(false);

  async function handleClick(recipe) {
    const updatedRecipe = await updateRecipe({ ...recipe, liked: false });
    setRecipes((oldRecipes) =>
      oldRecipes.map((or) =>
        or._id === updatedRecipe._id ? updatedRecipe : or
      )
    );
  }

  function handleRemoveWishlist() {
    if (!remove) {
      setTimeout(() => {
        setWishlistDisplay(false);
      }, 200);
      setRemove(true);
    }
  }

  return (
    <div
      onClick={handleRemoveWishlist}
      className={styles.container}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.wishlist} ${remove ? styles.remove : ""}`}>
        <h4 className="mb-20">Wishlist</h4>

        <ul>
          {wishedRecipes &&
            wishedRecipes.map((recipe) => (
              <li
                key={recipe._id}
                className="d-flex align-items-center mb-10">
                <span className="flex-fill mr-15">{recipe.title}</span>
                <button
                  onClick={() => handleClick(recipe)}
                  className="btn btn--danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Wishlist;
