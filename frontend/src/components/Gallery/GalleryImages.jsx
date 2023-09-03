import React from 'react';
import galleryImages from './Gallery';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const GalleryImages = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <img className='Gallery__img'
            src={item}
            key={index}
            alt={`galleryImage-${index}`}
            style={{ width: '100%', display: 'block', borderRadius: '10px' }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default GalleryImages;
