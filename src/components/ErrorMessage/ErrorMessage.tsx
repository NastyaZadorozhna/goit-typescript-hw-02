import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div>
      <p className={styles.errorMessage}>
        Oooops, something went wrong! Please try reloading this page.
      </p>
    </div>
  );
};

export default ErrorMessage;
