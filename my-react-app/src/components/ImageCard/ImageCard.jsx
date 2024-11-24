import styles from "./ImageCard.module.css";

function ImageCard({ image, alt_description, onClick }) {
  return (
    <div onClick={onClick}>
      <div>
        <img className={styles.img} src={image} alt={alt_description} />
      </div>
    </div>
  );
}

export default ImageCard;
