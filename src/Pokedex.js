import React from 'react';
import usePokemon from './hooks/usePokemon.js';
import './Pokedex.css';

export default function Pokedex() {
  const { pokemon } = usePokemon();
  return (
    <div className="pokeContainer">
      {pokemon.map((pkmn) => (


        <div className="pokeCard" key={pkmn.id}>
          <h1>{pkmn.pokemon}</h1>
        </div>
      ))}
    </div>
  );
}
