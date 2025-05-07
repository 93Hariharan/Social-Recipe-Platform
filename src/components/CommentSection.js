// src/components/CommentSection.js
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import "../styles/CommentSection.css";

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setAllComments([...allComments, comment]);
      setComment("");
    }
  };

  return (
    <div className="comment-section">
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" className="send-button">
          <FaPaperPlane />
        </button>
      </form>
      <ul className="comment-list">
        {allComments.map((cmt, index) => (
          <li key={index}>{cmt}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
