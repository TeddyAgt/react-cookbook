import { useFetchRecipes } from "../../../../../../hooks";
import styles from "./AdminRecipesList.module.scss";
import { deleteRecipe } from "../../../../../../API";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { recipesState } from "src/state";

function AdminRecipesList() {
  useFetchRecipes();
  const [recipes, setRecipes] = useRecoilState(recipesState);

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
            <NavLink to={`../edit/${r._id}`}>
              <button className="btn btn--reverse-primary mr-15">Éditer</button>
            </NavLink>
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
