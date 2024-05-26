import { atom } from "recoil";
import { RecipeI } from "src/interfaces";

export const recipesState = atom<RecipeI[]>({
  key: "recipesState",
  default: [],
});

export const wishlistDisplayState = atom({
  key: "wishlistDisplayState",
  default: false,
});
