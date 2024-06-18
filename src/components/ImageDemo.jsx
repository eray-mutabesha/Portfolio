import React, { useState, useEffect } from 'react';

const ImageDemo = () => {
  
  const images = [
    'one.png', 
    'two.png',
    'tree.png'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <img src={images[currentIndex]} alt="slideshow" style={{ width: '400px', height: '200px',border:"0.5px solid rgba(211, 211, 211, 0.671)",objectFit:'cover' }} className='imagesSlider'/>
    </div>
  );
};

export default ImageDemo;
