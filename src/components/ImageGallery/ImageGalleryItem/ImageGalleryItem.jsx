import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ largeImageURL, tags, webUrl }) => {
  return (
    <li className={s.item}>
      <img
        className={s.image}
        src={webUrl}
        alt={tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
