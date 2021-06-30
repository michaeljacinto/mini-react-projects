const axios = require("axios");

export default async function fetchPokemonData(pokemon) {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  // @ts-ignore
  let response = await axios.get(url + pokemon);
  let sprite = response.data.sprites.front_shiny;
  return sprite;
}
