import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import s from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.list}>
      {images.map(({ id, largeImageURL, tags, webformatURL }, idx) => (
        <ImageGalleryItem
          key={`${idx}+${id}`} // this resolving problems of backend when two children encountered  with the same key
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
