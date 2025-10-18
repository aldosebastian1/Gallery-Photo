import React from "react";
import { Link } from "react-router-dom";

function ImageCard({ image }) {
  return (
    <div className="image-card">
      <Link to={`/detail/${image.id}`}>
        <img src={image.url} alt={image.title} />
      </Link>
      <p>{image.title}</p>
    </div>
  );
}

export default ImageCard;
