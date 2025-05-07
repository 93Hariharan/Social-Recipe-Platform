// src/components/BookmarkButton.js
import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import "../styles/BookmarkButton.css";

const BookmarkButton = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="bookmark-container" onClick={toggleBookmark}>
      {bookmarked ? <FaBookmark className="bookmark-icon bookmarked" /> : <FaRegBookmark className="bookmark-icon" />}
    </div>
  );
};

export default BookmarkButton;
