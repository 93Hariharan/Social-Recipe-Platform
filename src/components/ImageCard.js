// src/components/ImageCard.js
import React from "react";
import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";
import BookmarkButton from "./BookmarkButton";
import { motion } from "framer-motion";
import "../styles/ImageCard.css";

const ImageCard = ({ image }) => {
  return (
    <motion.div
      className="post-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.img
        src={image.url}
        alt={image.title}
        className="post-image"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      />
      <div className="post-content">
        <motion.h3
          className="post-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {image.title}
        </motion.h3>
        <div className="interaction-buttons" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <LikeButton />
          <BookmarkButton />
        </div>
        <CommentSection />
      </div>
    </motion.div>
  );
};

export default ImageCard;
