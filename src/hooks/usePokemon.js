
































































import { useState, useEffect } from 'react';
import { getPokemon, getTypes } from '../components/pokemon.js';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(false);
  const [select, setSelection] = useState('all');
  const [type, setType] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      try {
        const data = await getPokemon(select);
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    loadPokemon();
  }, [select]);

  useEffect(() => {
    const loadTypes = async () => {
        
      try {
        const data = await getTypes();
        setType(data.map((type) => ({ value: type.type, label: type.type })));

      } catch (error) {
        setError(error.message);
      }
    };
    loadTypes();
  });

  return { pokemon, loading, error, type, setSelection };
}