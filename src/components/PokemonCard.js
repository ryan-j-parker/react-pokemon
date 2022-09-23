export default function PokemonCard({ id, url_image, pokemon, type_1, type_2, height, weight, attack, defense }) {

  return (
    <>
      <div className="pokeContainer">

        <div className="pokeCard" key={id} >

          <div>
            <img src={url_image} className="pokeImage" />
          </div>

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
      </div>
    </>
  );
}
