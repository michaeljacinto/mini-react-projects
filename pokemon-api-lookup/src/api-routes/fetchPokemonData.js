const axios = require("axios");

export default async function fetchPokemonData(pokemon) {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  // @ts-ignore
  let response = await axios.get(url + pokemon);
  let sprite = response.data.sprites.front_shiny;
  // console.log(sprite);
  // return { sprite1: sprite };
  return {
    front_shiny: response.data.sprites.front_shiny,
    front_default: response.data.sprites.front_default,
    back_default: response.data.sprites.back_default,
    back_shiny: response.data.sprites.back_shiny,
    official_artwork: response.data.sprites.other['dream_world'].front_default
  };
}

// return {
//   front_shiny: response.data.sprites.front_shiny,
//   front_default: response.data.sprites.front_default,
//   official_artwork: response.data.sprites.other['official-artwork']
// };