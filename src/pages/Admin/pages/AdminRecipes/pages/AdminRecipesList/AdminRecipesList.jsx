import { useFetchRecipes } from "../../../../../../hooks";
import styles from "./AdminRecipesList.module.scss";
import { deleteRecipe } from "../../../../../../API";

function AdminRecipesList() {
  const [[recipes, setRecipes]] = useFetchRecipes();

  async function handleClickDelete(_id) {
    if (await deleteRecipe(_id)) {
      setRecipes(recipes.filter((r) => r._id !== _id));
    } else {
      throw new Error("La suppression a échouée");
    }
  }

  return (
    <ul className={styles.list}>
      {recipes.length ? (
        recipes.map((r) => (
          <li
            key={r._id}
            className="d-flex align-items-center">
            <span className="flex-fill">{r.title}</span>
            <button className="btn btn--reverse-primary mr-15">Éditer</button>
            <button
              onClick={() => handleClickDelete(r._id)}
              className="btn btn--danger">
              Supprimer
            </button>
          </li>
        ))
      ) : (
        <p>Pas encore de recettes</p>
      )}
    </ul>
  );
}

export default AdminRecipesList;
