// src/components/LikeButton.js
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "../styles/CommentSection.css"; // optional, or move to ImageCard.css

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="like-icon-container" onClick={toggleLike}>
      <FaHeart className={`heart-icon ${liked ? "liked" : ""}`} />
      <span className="like-count">{count}</span>
    </div>
  );
};

export default LikeButton;
