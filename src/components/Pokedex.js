import React from 'react';
import usePokemon from '../hooks/usePokemon.js';
import './Pokedex.css';
import Select from './Select.js';
import pokeballLoader from '../pokeball.png';
import PokemonCard from './PokemonCard.js';
import { useState } from 'react';

export default function Pokedex() {
  const { pokemon, type, setSelection, loading, error } = usePokemon();
  const [search, setSearch] = useState('');

  const searchPokemon = () => {
    return pokemon.filter((pkmn) => {
      return pkmn.pokemon.toLowerCase().match(search);
    });
  };

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
            <div className="sort-bar">
              <Select options={type} changeHandler={setSelection} />
            </div>
            <div className="search-bar">
              <label htmlFor="search">Search by name</label>
              <input className="sort" name="search" placeholder="enter name" value={search} onChange={(e) => {
                setSearch(e.target.value);
              }}></input>
            </div>
          </div>
          <div className="pokeContainer">
            {searchPokemon().map((pkmn) => (
              <PokemonCard key={pkmn.id} pokemon={pkmn.pokemon} url_image={pkmn.url_image} type_1={pkmn.type_1} type_2={pkmn.type_2} height={pkmn.height} weight={pkmn.weight} attack={pkmn.attack} defense={pkmn.defense} />
            ))}
          </div>
        </div>
      }
    </>
  );
}