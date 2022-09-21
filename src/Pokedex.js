import React from 'react';
import usePokemon from './hooks/usePokemon.js';
import './Pokedex.css';

export default function Pokedex() {
  const { pokemon } = usePokemon();
  let { pokemon2 } = pokemon.map((pkm) => 
  {if (pkm.species_id.length === 1) {
    pkm.species_id = '00' + pkm.species_id
  }
  if (pkm.species_id.length === 2) {
    pkm.species_id = '0' + pkm.species_id
  } 
  return pokemon;);
  console.log(pokemon2);

  return (
    <div className="pokeContainer">
      {pokemon.map((pkmn) => (
        <div className="pokeCard" key={pkmn.id}> 
          <div>
            {pkmn.species_id.length === 3} 
            <img src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${pkmn.species_id}.png`}/>
            {pkmn.species_id.length === 2} 
            <img src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/0${pkmn.species_id}.png`}/>
            {pkmn.species_id.length === 1}  
            <img src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pkmn.species_id}.png`}/>
          </div>
          <h1>{pkmn.pokemon}</h1>
          <h4>{pkmn.type_1}</h4>
          <h4>{pkmn.type_2}</h4>
          <div className="stats"> Stats:
            <p>Height {pkmn.height}</p>
            <p>Weight {pkmn.weight}</p>
          </div>
        </div>
      ))}
    </div>
    
  );
  
}
