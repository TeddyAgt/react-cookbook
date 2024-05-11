import styles from "./Admin.module.scss";
import RecipeForm from "./components/RecipeForm/RecipeForm";

function Admin() {
  return (
    <main
      className={`flex-fill container p-20 d-flex flex-column align-items-center p-20`}>
      <RecipeForm />
    </main>
  );
}

export default Admin;
