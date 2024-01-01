//frontend/src/components/backgroundImg.js
import React from 'react';
import Image from 'next/image';

const BackgroundImg = () => {
  return (
    <div className="img-container back">
      <Image
        src="/hotel.jpg"
        alt="background Picture"
        width={500}
        height={500}
        className="lazy-loaded-image"
      />
    </div>
  );
};

export default BackgroundImg;

