































export async function getPokemon(selectedType) {
  const params = new URLSearchParams();
  params.set('perPage', 10);
  if (selectedType !== 'all') {
    params.set('type', selectedType);
  }
  
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const data = await response.json();
  return data.results;
}

export async function getTypes() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data;
}