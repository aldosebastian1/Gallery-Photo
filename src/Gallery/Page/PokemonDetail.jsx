import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  pokemonAssetGen1,
  pokemonAssetGen2,
  pokemonAssetGen3,
} from "../../assets/asset";
import "./pokemondetail.css";

function PokemonDetail() {
  const { id } = useParams();
  const idNum = Number(id);

  const allPokemon = useMemo(
    () => [...pokemonAssetGen1, ...pokemonAssetGen2, ...pokemonAssetGen3],
    []
  );

  const pokemon = allPokemon.find((p) => Number(p._id) === idNum);
  const [showAbilityDesc, setShowAbilityDesc] = useState(false);

  if (!pokemon) {
    return (
      <div className="gallery-container pokemondetail-container">
        <Link to="/pokedex" className="back-link">
          &larr; Back to Pokédex
        </Link>
      </div>
    );
  }

  return (
    <div className="gallery-container pokemondetail-container">
      <div className="detail-header">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <div className="ability-inline">
          <span className="ability-name">{pokemon.ability}</span>
          <button
            className="ability-toggle"
            aria-expanded={showAbilityDesc}
            aria-controls="ability-desc"
            onClick={() => setShowAbilityDesc((s) => !s)}
            title="Show ability description"
          >
            ?
          </button>
        </div>
      </div>

      <div className="detail-main">
        <div className="detail-image">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>

        <div className="detail-info">
          <p className="pokemon-description">{pokemon.description}</p>

          <ul className="pokemon-meta">
            <li>
              <strong>Type:</strong> {pokemon.type1}
              {pokemon.type2 ? ` / ${pokemon.type2}` : ""}
            </li>
            <li>
              <strong>Height:</strong> {pokemon.height}
            </li>
            <li>
              <strong>Weight:</strong> {pokemon.weight}
            </li>
            <li>
              <strong>Category:</strong> {pokemon.category}
            </li>
          </ul>

          <div
            id="ability-desc"
            className={`ability-desc ${showAbilityDesc ? "visible" : ""}`}
          >
            {showAbilityDesc ? pokemon.desc_ability : null}
          </div>

          <Link to="/pokedex" className="back-link">
            &larr; Back to Pokédex
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;