import React, { useMemo, useState, useEffect } from "react";
import ImageCard from "../components/ImageCard";
import {
  pokemonAssetGen1,
  pokemonAssetGen2,
  pokemonAssetGen3,
} from "../../assets/asset";
import "./pokedex.css";

function Pokedex() {
  const [activeGen, setActiveGen] = useState(1);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const genMap = useMemo(
    () => ({
      1: pokemonAssetGen1,
      2: pokemonAssetGen2,
      3: pokemonAssetGen3,
    }),
    []
  );

  const defaultVisible = useMemo(() => {
    const gen = genMap[activeGen] ?? [];
    return gen.slice(0, 5);
  }, [genMap, activeGen]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setSearchResults(null);
      return;
    }
    const all = [...pokemonAssetGen1, ...pokemonAssetGen2, ...pokemonAssetGen3];
    const filtered = all.filter((p) => p.name.toLowerCase().includes(q));
    setSearchResults(filtered);
  }, [query]);

  const visible = searchResults ?? defaultVisible;

  return (
    <div className="pokedex-page">
      <h2>POKÉDEX</h2>

      <div className="pokedex-controls">
        <div
          className="pokedex-buttons"
          role="tablist"
          aria-label="Generations"
        >
          <button
            className={activeGen === 1 ? "active" : ""}
            onClick={() => setActiveGen(1)}
            aria-pressed={activeGen === 1}
          >
            GEN 1
          </button>
          <button
            className={activeGen === 2 ? "active" : ""}
            onClick={() => setActiveGen(2)}
            aria-pressed={activeGen === 2}
          >
            GEN 2
          </button>
          <button
            className={activeGen === 3 ? "active" : ""}
            onClick={() => setActiveGen(3)}
            aria-pressed={activeGen === 3}
          >
            GEN 3
          </button>
        </div>

        <form
          className="pokedex-search"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search Pokémon by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search Pokémon"
          />
        </form>
      </div>

      <div className="image-grid pokedex-grid">
        {visible && visible.length > 0 ? (
          visible.map((p) => (
            <div key={p._id} className="image-card">
              <ImageCard image={{ id: p._id, url: p.image, title: p.name }} />
            </div>
          ))
        ) : (
          <p>Pokémon not found.</p>
        )}
      </div>
    </div>
  );
}

export default Pokedex;
