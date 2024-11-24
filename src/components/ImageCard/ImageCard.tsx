import React from "react";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  image: string;
  alt_description: string | null;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, alt_description, onClick }) => {
  return (
    <div onClick={onClick}>
      <img className={styles.img} src={image} alt={alt_description || "Image"} />
    </div>
  );
};

export default ImageCard;
