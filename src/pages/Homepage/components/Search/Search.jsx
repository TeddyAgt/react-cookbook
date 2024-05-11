import styles from "./Search.module.scss";

function Search({ setFilter }) {
  function handleInputSearch(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div
      className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}>
      <i className="fa-solid fa-magnifying-glass mr-15"></i>
      <input
        onInput={handleInputSearch}
        type="text"
        placeholder="Rechercher..."
        className="flex-fill"
      />
    </div>
  );
}

export default Search;
