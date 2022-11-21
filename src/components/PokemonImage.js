export default function PokemonImage({ url_image }) {
  return (
    <div>
      <img src={url_image} className="pokeImage" />
    </div>
  );
}
