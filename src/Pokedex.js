import React from 'react';
import usePokemon from './hooks/usePokemon.js';
import './Pokedex.css';

export default function Pokedex() {
  const { pokemon } = usePokemon();
  return (
    <div className="pokeContainer">
      {pokemon.map((pkmn) => (
        <div className="pokeCard" key={pkmn.id}> 
          <div>
            <img src={`${pkmn.url_image}`} />
          </div>
          <h1>{pkmn.pokemon}</h1>
          <div className="type"> Type:
            <h4>{pkmn.type_1}</h4>
            <h4>{pkmn.type_2}</h4>
          </div>
          <div className="stats"> Stats:
            <p>Height {pkmn.height}</p>
            <p>Weight {pkmn.weight}</p>
            <p>Attack {pkmn.attack}</p>
            <p>Defense {pkmn.defense}</p>
          </div>
        </div>
      ))}
    </div>
    
  );
  
}
