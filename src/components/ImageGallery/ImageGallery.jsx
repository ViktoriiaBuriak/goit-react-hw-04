import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ images, handleImageClick }) {
  return (
    <ul className={css.imageList}>
      {images.map((image) => (
        <li
          className={css.imageItem}
          key={image.id}
          onClick={() => handleImageClick(image)}
        >
          <div>
            <ImageCard image={image} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
