export default async function getPokemon() {
  const params = new URLSearchParams();
  // params.set('perPage', 10);
  
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const data = await response.json();
  return data.results;
}
