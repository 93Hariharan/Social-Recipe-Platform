import React, { useState, useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

function ImageUploader() {
  const { addImage } = useContext(ImageContext);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) return alert("Please upload an image.");
    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = {
        title: title.trim(),
        url: reader.result,
        tags: tags.split(',').map(tag => tag.trim()),
        ingredients: ingredients.split(',').map(ing => ing.trim())
      };
      addImage(newImage);
      // Clear form
      setTitle('');
      setTags('');
      setIngredients('');
      setFile(null);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add New Image</h2>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /><br />
      <input type="text" placeholder="Tags (comma separated)" value={tags} onChange={e => setTags(e.target.value)} /><br />
      <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={e => setIngredients(e.target.value)} /><br />
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} /><br />
      <button onClick={handleUpload}>Add Image</button>
    </div>
  );
}

export default ImageUploader;
