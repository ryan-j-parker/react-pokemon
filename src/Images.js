import React from 'react';
import usePokemon from './hooks/usePokemon.js';

export default function Images() {
  let pokemon = usePokemon();
  return (
    (pokemon.map((mon) => {
      {
        let spec = '';
        const length = mon.species_id.length;

        if (length === 1) {
          spec === '00';
        } else if (length === 2) {
          spec === '0';
        }
            
        console.log('pokemon object', pokemon);
        return <img src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${spec}${mon.species_id}.png`} />;
      }
    }))
  );
}
