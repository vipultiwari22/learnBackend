import axios from "axios";
import { useState, useEffect } from "react";

function usepokemonList(url, type) {
  const [pokemonListState, setPokemonListState] = useState({
    PokemonLists: [],
    isLoding: true,
    pokedexUrl: url,
    nextUrl: "",
    prevUrl: "",
  });

  const downloadPokemon = async () => {
    setPokemonListState({ ...pokemonListState, isLoding: true });
    try {
      const response = await axios.get(pokemonListState.pokedexUrl);
      const Pokemonresults = response.data.results;
      console.log("Pokemonresults", response.data.pokemon);
      console.log(pokemonListState);
      setPokemonListState((state) => ({
        ...state,
        nextUrl: response.data.next,
        prevUrl: response.data.previous,
      }));
      if (type) {
        console.log("trperequested");
        setPokemonListState((state) => ({
          ...state,
          PokemonLists: response.data.pokemon.slice(0, 5),
        }));
      } else {
        const pokemonResultPromise = Pokemonresults.map((pokemon) =>
          axios.get(pokemon.url)
        );
        const pokemonData = await axios.all(pokemonResultPromise);

        const pokeListResult = pokemonData.map((pokeData) => ({
          id: pokeData.data.id,
          name: pokeData.data.name,
          image: pokeData.data.sprites.other
            ? pokeData.data.sprites.other.dream_world.front_default
            : pokeData.data.sprites.front_shiny,
          types: pokeData.data.types,
        }));

        setPokemonListState((state) => ({
          ...state,
          PokemonLists: pokeListResult,
          isLoding: false,
        }));
      }
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      setPokemonListState({ ...pokemonListState, isLoding: false });
    }
  };

  useEffect(() => {
    downloadPokemon();
  }, [pokemonListState.pokedexUrl]);
  return [pokemonListState, setPokemonListState];
}

export default usepokemonList;
