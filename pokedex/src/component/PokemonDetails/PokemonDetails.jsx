import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
// import PokemonList from "../PokemonList/PokemonList";
import usePokemonList from "../Hooks/usePokemonList";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  async function downloadPokemon() {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon({
        Name: response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        weight: response.data.weight,
        height: response.data.height,
        types: response.data.types.map((t) => t.type.name),
      });
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  }

  const [pokemonListState, setPokemonListState] = usePokemonList(
    `https://pokeapi.co/api/v2/type/fire/`,
    true
  );

  useEffect(() => {
    downloadPokemon();
    console.log("list", pokemonListState);
  }, [id]);

  return (
    <div className="poke-details-Wrapper">
      <img className="poke-images" src={pokemon.image} alt="" />
      <div className="poke-Name">
        <span>{pokemon.Name}</span>
      </div>
      <div className="poke-height">Height: {pokemon.height}</div>
      <div className="poke-weight">Weight: {pokemon.weight}</div>
      <div className="poke-types">
        {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
      </div>
      <div>
        More fire types Pokemons
        <ul>
          {pokemonListState.PokemonLists &&
            pokemonListState.PokemonLists.map((p) => (
              <li key={p.pokemon.url}>{p.pokemon.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetails;
