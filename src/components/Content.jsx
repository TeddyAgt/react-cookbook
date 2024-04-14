import styles from "./Content.module.scss";
import Recipe from "./Recipe";

function Content() {
  return (
    <main className={`flex-fill container p-20`}>
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <section className={`${styles.contentCard} card p-20`}>
        <div className={styles.grid}>
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
      </section>
    </main>
  );
}

export default Content;
