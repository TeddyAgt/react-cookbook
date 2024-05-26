import { ObjectId } from "src/types";

export interface RecipeI {
  _id: ObjectId;
  title: string;
  image: string;
  liked: boolean;
}
