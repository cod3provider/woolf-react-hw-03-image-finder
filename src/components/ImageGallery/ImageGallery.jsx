import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
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
