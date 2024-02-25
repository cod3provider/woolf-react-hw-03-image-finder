import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          largeUrl={image.largeImageURL}
          tags={image.tags}
          webImageUrl={image.webformatURL}
        />
      ))
      }
    </ul>
  );
};

export default ImageGallery;
