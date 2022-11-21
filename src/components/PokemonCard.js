import PokemonImage from './PokemonImage.js';

export default function PokemonCard({ id, url_image, pokemon, type_1, type_2, height, weight, attack, defense }) {

  return (
    <>
      <div className="pokeCard" key={id} >
        <PokemonImage className="pokeImage" key={id} url_image={url_image} />

        <h1>{pokemon}</h1>
        <h4>Type:</h4>
        <div className="type">
          <p> {type_1}, {type_2}</p>
        </div>
        <h4>Stats:</h4>
        <div className="stats">
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>Attack: {attack}</p>
          <p>Defense: {defense}</p>
        </div>
      </div>
    </>
  );
}
