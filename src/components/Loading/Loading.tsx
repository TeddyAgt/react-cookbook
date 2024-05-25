import style from "./Loading.module.scss";

function Loading() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-fill">
      <i className={`${style.spinner} fa-solid fa-spinner`}></i>
    </div>
  );
}

export default Loading;
