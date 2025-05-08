import React, { createContext, useState } from 'react';
import initialImages from '../assets/images';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState(initialImages);

  const addImage = (newImage) => {
    setImages(prev => [...prev, { ...newImage, id: prev.length + 1 }]);
  };

  return (
    <ImageContext.Provider value={{ images, addImage }}>
      {children}
    </ImageContext.Provider>
  );
};
