import React from "react";
import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={styles.btn} type="button" onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;