import { selectorFamily } from "recoil";
import { recipesState } from ".";
import { getRecipe } from "src/API";

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

export const selectActiveRecipe = selectorFamily({
  key: "selectActiveRecipe",
  get: (recipeId) => async () => recipeId && (await getRecipe(recipeId)),
});
