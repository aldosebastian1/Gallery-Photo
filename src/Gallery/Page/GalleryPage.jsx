import React, { useState, useEffect } from 'react';
import ImageCard from '../components/ImageCard';
import { pokemonAssetGen1, pokemonAssetGen2, pokemonAssetGen3 } from '../../assets/asset';

function GalleryPage() {
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const savedImages = localStorage.getItem('galleryImages');
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    } else {
      const seed = [
        ...pokemonAssetGen1.map(p => ({id: Number(p._id), url: p.image, title: p.name})),
        ...pokemonAssetGen2.map(p => ({id: Number(p._id), url: p.image, title: p.name})),
        ...pokemonAssetGen3.map(p => ({id: Number(p._id), url: p.image, title: p.name})),
      ];
      localStorage.setItem('galleryImages', JSON.stringify(seed));
      setImages(seed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('galleryImages', JSON.stringify(images));
  }, [images]);

  const handleAddImage = () => {
    if (url && title) {
      const newImage = { id: Date.now(), url, title };
      setImages([...images, newImage]);
      setUrl('');
      setTitle('');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newImage = { id: Date.now(), url: imageUrl, title: file.name };
      setImages([...images, newImage]);
    }
  };

  return (
    <div className="gallery-container">
      <h2>Galeri Gambar</h2>
      <div className="form-container">
        <input
          type="text"
          placeholder="URL Gambar"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Judul Gambar"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddImage}>Tambah Gambar</button>
        <br /><br />
        <input type="file" accept="image/*" onChange={handleFileUpload} />
      </div>
      <div className="image-grid">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
