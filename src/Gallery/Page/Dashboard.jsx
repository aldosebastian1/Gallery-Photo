import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

function Dashboard() {
    const [imageCount, setImageCount] = useState(0);

    useEffect(() => {
        const savedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
        setImageCount(savedImages.length);
    }, []);

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>📸 WEB GALERI FOTO</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/galeri">Galeri Foto</Link></li>
                    </ul>
                </nav>
            </header>

            <section className="dashboard-content">
                <h2>Selamat Datang di Website Galeri Foto</h2>
                <p>Simpan foto Anda untuk menjadi kenang-kenangan.</p>
                <img
                    src="https://via.placeholder.com/600x200?text=Galeri+Foto"
                    alt="Banner Galeri"
                    className="dashboard-banner"
                />
                <p>Total Foto Tersimpan: <strong>{imageCount}</strong></p>
                <Link to="/galeri">
                    <button className="btn-primary">Lihat Galeri</button>
                </Link>
            </section>
        </div>
    );
}

export default Dashboard;
