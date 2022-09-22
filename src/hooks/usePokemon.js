import { useState, useEffect } from 'react';
import getPokemon from '../pokemon.js';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(false);
  const [type, setType] = useState('');


  useEffect(() => {

    const loadPokemon = async () => {
      try {
        const data = await getPokemon(setType);
        setPokemon(data);
      } catch (error) {
        setError(error.message);
      }

    };

    loadPokemon();
  }, [setType]);

  useEffect(() => {
    const loadTypes = async () => {
      try {
        const data = await getTypes();
        setType(data.map(type => type.type));

      } catch (error) {
        setError(error.message);
      }
    };
  });

  return { pokemon, error };
}