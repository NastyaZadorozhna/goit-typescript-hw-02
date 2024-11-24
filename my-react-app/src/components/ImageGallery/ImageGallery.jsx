import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

function ImageGallery({ img, openModal }) {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default ImageGallery;
