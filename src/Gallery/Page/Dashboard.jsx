import React from 'react';
import '../../index.css';

function Home() {
  return (
    <div className="home-container">
      {/* Banner Promosi Utama */}
      <section className="banner">
        https://assets.pokemon.com/assets/cms2/img/misc/legends/z-a/banner.jpg
        <h1>Lumiose City Is Waiting</h1>
        <p>Pokémon Legends: Z-A – Coming to Nintendo Switch</p>
      </section>

      {/* Iklan Merchandise */}
      <section className="section promo">
        <h2>🛍️ Merchandise Terbaru</h2>
        <div className="promo-card">
          https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
          <div>
            <p><strong>Mug Pikachu & Eevee</strong></p>
            <p>Tersedia di Pokémon Center dengan desain eksklusif!</p>
          </div>
        </div>
      </section>

      {/* Berita & Event */}
      <section className="section news">
        <h2>📣 Berita & Event</h2>
        <div className="news-item">
          <h3>🎉 Pokémon Legends: Z-A Celebration</h3>
          <p>Ikuti event spesial di Pokémon GO dan dapatkan hadiah eksklusif!</p>
        </div>
        <div className="news-item">
          <h3>⚔️ Ranked Battles Season Dimulai!</h3>
          <p>Uji kemampuanmu di Ranked Battles Season pertama!</p>
        </div>
        <div className="news-item">
          <h3>🎓 Leveling System Baru</h3>
          <p>Capai level 80 di Pokémon GO dengan sistem leveling terbaru!</p>
        </div>
      </section>

      {/* Update Mingguan */}
      <section className="section weekly">
        <h2>🗓️ What's New This Week</h2>
        <ul>
          <li>🎃 Deck TCG bertema Halloween telah dirilis!</li>
          <li>⚔️ Event PvP baru tersedia di Pokémon Unite!</li>
          <li>🧩 Puzzle mingguan tersedia di Pokémon Café Remix!</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;