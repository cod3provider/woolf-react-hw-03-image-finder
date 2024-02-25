const ImageGalleryItem = ({ largeImageURL, tags, webUrl }) => {
  return (
    <li>
      <img
        src={webUrl}
        alt={tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
