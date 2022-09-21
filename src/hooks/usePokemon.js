import { useState, useEffect } from 'react';
import getPokemon from '../../pokemon.js';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {

    const loadData = async () => {
      const data = await getPokemon();
      setPokemon(data);
    };
      
    loadData();
  }, []);

  return pokemon;
}