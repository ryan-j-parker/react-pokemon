import React from 'react';
import usePokemon from '../hooks/usePokemon.js';
import './Pokedex.css';
import Select from './Select';

export default function Pokedex() {
  const { pokemon } = usePokemon();
  return (
    <div className="pokeContainer">
      {pokemon.map((pkmn) => (
        <div className="pokeCard" key={pkmn.id}> 
          <div>
            <img src={`${pkmn.url_image}`} className="pokeImage"/>
          </div>
          <h1>{pkmn.pokemon}</h1>
          <h4>Type:</h4>
          <div className="type">
            <p> {pkmn.type_1}, {pkmn.type_2}</p>
          </div>
          <h4>Stats:</h4>
          <div className="stats"> 
            <p>Height: {pkmn.height}</p>
            <p>Weight: {pkmn.weight}</p>
            <p>Attack: {pkmn.attack}</p>
            <p>Defense: {pkmn.defense}</p>
          </div>
        </div>
      ))}
    </div>
    
  );
  
}
