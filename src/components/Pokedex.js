import React from 'react';
import usePokemon from '../hooks/usePokemon.js';
import './Pokedex.css';
import Select from './Select.js';
import pokeballLoader from '../pokeball.png';
import PokemonCard from './PokemonCard.js';


export default function Pokedex() {
  const { pokemon, type, setSelection, loading, error } = usePokemon();
  

  return (
    <>
      <p>{error}</p>
      <div className="title-div">
        <img className="title-pokeball" src={pokeballLoader} />
        <h1 className="title">Pokemon Compendium</h1>
        <img className="title-pokeball" src={pokeballLoader} />
      </div>
      {loading ? <div className="loader-wrap"><img className="loading" src={pokeballLoader} /></div> :
        <div className="main">
          <div className="selection">
            <img className="select-pokeball" src={pokeballLoader} />
            <Select options={type} changeHandler={setSelection} />
            <img className="select-pokeball-r" src={pokeballLoader} />
          </div>
          <div className="pokeContainer">
            {pokemon.map((pkmn) => (                
              <PokemonCard key={pkmn.id} pokemon={pkmn.pokemon} url_image={pkmn.url_image} type_1={pkmn.type_1} type_2={pkmn.type_2} height={pkmn.height} weight={pkmn.weight} attack={pkmn.attack} defense={pkmn.defense} />
            ))}
          </div>
        </div>
      }
    </>
  );
}