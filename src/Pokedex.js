import React from 'react';
import usePokemon from './hooks/usePokemon.js';
import './Pokedex.css';

export default function Pokedex() {
  const { pokemon } = usePokemon([]);
  console.log(pokemon);
  return (
    <div className="pokeContainer">
      {pokemon.map((pkmn) => (


        <div className="pokeCard" key={pkmn.id}>
          <h1>{pkmn.pokemon}</h1>
          <h4>{pkmn.type_1}</h4>
          <h4>{pkmn.type_2}</h4>
          <div className="stats">
            <p>{pkmn.attack}</p>
            <p>{pkmn.defense}</p>
            <p>{pkmn.hp}</p></div>
        </div>
      ))}
    </div>
  );
}
