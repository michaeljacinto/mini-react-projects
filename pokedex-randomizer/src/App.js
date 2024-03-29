import './App.css';
import { useState, useEffect } from "react";
import PokemonThumbnail from './components/PokemonThumbnail'

function App() {

  const randomOffset = Math.floor(Math.random() * 1098);
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${randomOffset}`)

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="app-contaner">
      <h1>Random Pokedex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemonStats, index) =>
            <PokemonThumbnail
              key={index}
              id={pokemonStats.id}
              // image={pokemonStats.sprites.other.dream_world.front_default}
              image={pokemonStats.sprites.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
  );
}

export default App;