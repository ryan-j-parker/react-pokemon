import { useState, useEffect } from 'react';
import getPokemon from '../components/pokemon.js';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {

    const loadPokemon = async () => {
      const data = await getPokemon();
      setPokemon(data);
    };

    loadPokemon();
  }, []);

  return { pokemon };
}