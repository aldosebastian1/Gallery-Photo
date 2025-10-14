import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ImageDetail() {
  const { id } = useParams();
  const savedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
  const image = savedImages.find((img) => img.id === parseInt(id));

  if (!image) return <p>Gambar tidak ditemukan.</p>;

  return (
    <div className="gallery-container">
      <h2>Detail Gambar</h2>
      <img src={image.url} alt={image.title} style={{ maxWidth: '400px' }} />
      <p>{image.title}</p>
      <Link to="/">← Kembali ke Galeri</Link>
    </div>
  );
}

export default ImageDetail;