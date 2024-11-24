import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { Image } from "../types";

interface ImageGalleryProps {
  img: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ img, openModal }) => {
  return (
    <ul className={styles.list}>
      {img.map((image) => (
        <li key={image.id} className={styles.item}>
          <ImageCard
            image={image.urls.small}
            alt_description={image.alt_description}
            onClick={() => openModal(image)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
