import styles from "./AdminRecipeForm.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRecipe, updateRecipe } from "../../../../../../API";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectActiveRecipe } from "src/state";
import { RecipeI } from "src/interfaces";

function AdminRecipeForm() {
  const { recipeId } = useParams();
  const recipe = useRecoilValue(selectActiveRecipe(recipeId));
  const navigate = useNavigate();
  const defaultValues = {
    title: recipe ? recipe.title : "",
    image: recipe ? recipe.image : "",
    generic: "",
  };

  const recipeSchema = yup.object({
    title: yup
      .string()
      .required("Le titre est obligatoire")
      .min(5, "Le titre doit être explicite")
      .max(50, "Le titre est trop long"),

    image: yup
      .string()
      .required("Ce champs est requis")
      .url("L'image n'est pas une URL valide"),
  });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
  } = useForm({ defaultValues, resolver: yupResolver(recipeSchema) });

  async function handleSubmitForm(values: Partial<RecipeI>) {
    clearErrors();

    try {
      if (recipe) {
        await updateRecipe({
          ...values,
          _id: recipe._id,
        });

        navigate("/admin/recipes/list");
      } else {
        await createRecipe(values);
        reset(defaultValues);
      }
    } catch (e) {
      setError("generic", {
        type: "generic",
        message: "Une erreur est survenue",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className={`d-flex flex-column card p-20 ${styles.recipeForm}`}>
      <h1 className="mb-20">Ajouter une recette</h1>

      <div className="d-flex flex-column mb-20">
        <label htmlFor="title">Titre de la recette</label>
        <input
          type="text"
          id="title"
          {...register("title")}
        />
        {errors.title && <p className="form-error">{errors.title.message}</p>}
      </div>

      <div className="d-flex flex-column mb-20">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="picture"
          {...register("image")}
        />
        {errors.image && <p className="form-error">{errors.image.message}</p>}
      </div>
      {errors.generic && <p className="form-error">{errors.generic.message}</p>}
      <div className="">
        <button
          disabled={isSubmitting}
          className="btn btn--primary">
          Sauvegarder
        </button>
      </div>
    </form>
  );
}

export default AdminRecipeForm;
