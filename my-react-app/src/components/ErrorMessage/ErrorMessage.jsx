import style from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <div>
      <p className={style.errorMessage}>
        Oooops, something went wrong! Please try reloading this page.
      </p>
    </div>
  );
}

export default ErrorMessage;
