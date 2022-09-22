import React from 'react';
import usePokemon from './hooks/usePokemon.js';
import './Pokedex.css';
import Select from './Select.js';
import pokeballLoader from './pokeball-loader.png';

export default function Pokedex() {
  const { pokemon, type, setSelection, loading } = usePokemon([]);

  return (
    <>
      {loading ? <div className="loader-wrap"><img className="loading" src={pokeballLoader} /></div> :
        <div className="main">
          <div className="selection">
            <Select options={type} changeHandler={setSelection} />
          </div>
          <div className="pokeContainer">
            {pokemon.map((pkmn) => (
              <div className="pokeCard" key={pkmn.id} >

                <div className="image">
                  <img src={pkmn.url_image} />
                </div>

                <h1>{pkmn.pokemon}</h1>
                <h4>{pkmn.type_1}</h4>
                <h4>{pkmn.type_2}</h4>
                <div className="stats">
                  Stats:
                  <p>{pkmn.attack}</p>
                  <p>{pkmn.defense}</p>
                  <p>{pkmn.hp}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
}
