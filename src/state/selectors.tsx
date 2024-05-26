import { selectorFamily, selector } from "recoil";
import { recipesState } from ".";
import { getRecipe } from "src/API";
import { ObjectId } from "src/types";

export const selectFilteredRecipes = selectorFamily({
  key: "selectFilteredRecipes",
  get:
    (filter: string) =>
    ({ get }) => {
      const recipes = get(recipesState);
      return recipes.filter((recipe) =>
        recipe.title.toLowerCase().startsWith(filter)
      );
    },
});

export const selectActiveRecipe = selectorFamily({
  key: "selectActiveRecipe",
  get: (recipeId?: ObjectId) => async () =>
    recipeId ? await getRecipe(recipeId) : null,
});

export const selectWishedRecipes = selector({
  key: "selectWishedRecipes",
  get: ({ get }) => get(recipesState)?.filter((recipe) => recipe.liked),
});
