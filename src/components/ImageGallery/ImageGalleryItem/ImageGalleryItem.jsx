import s from './ImageGalleryItem.module.css';
import { useState } from 'react';

const ImageGalleryItem = ({ largeUrl, tags, webUrl, openModalClick }) => {
  return (
    <li className={s.item}>
      <img
        className={s.image}
        src={webUrl}
        alt={tags}
        onClick={() => openModalClick(largeUrl, tags)}
      />
    </li>
  );
};

export default ImageGalleryItem;
