// src/components/Home.js

import React, { useState } from "react";
import SearchByTagsIngredients from "./SearchByTagsIngredients";
import images from "../assets/images"; // Make sure this is an array of image objects with `tags` or `ingredients`
import ImageCard from "./ImageCard";
import "../styles/home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter logic based on tags or ingredients
  const filteredImages = images.filter((img) => {
    const tags = img.tags || [];
    const ingredients = img.ingredients || [];
    const combined = [...tags, ...ingredients].map((item) => item.toLowerCase());
    return combined.some((item) => item.includes(searchQuery));
  });

  return (
    <div>
      <SearchByTagsIngredients onSearch={handleSearch} />

      <div className="home-container">
        {(searchQuery ? filteredImages : images).map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}

        {searchQuery && filteredImages.length === 0 && (
          <p style={{ textAlign: "center", color: "#666" }}>No images found matching "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
};

export default Home;
