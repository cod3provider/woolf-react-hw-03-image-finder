import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import s from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.list}>
      {images.map(({ id, largeImageURL, tags, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          largeUrl={largeImageURL}
          tags={tags}
          webUrl={webformatURL}
        />
      ))
      }
    </ul>
  );
};

export default ImageGallery;
