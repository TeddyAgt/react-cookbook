import { selectorFamily } from "recoil";
import { recipesState } from ".";

export const selectFilteredRecipes = selectorFamily({
  key: "selectFilteredRecipes",
  get:
    (filter) =>
    ({ get }) => {
      const recipes = get(recipesState);
      return (
        recipes.length &&
        recipes.filter((recipe) =>
          recipe.title.toLowerCase().startsWith(filter)
        )
      );
    },
});
