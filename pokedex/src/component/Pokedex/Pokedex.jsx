import React from "react";
import Search from "../search/Search";
import "./Pokedex.css";
import PokemonList from "../PokemonList/PokemonList";

function Pokedex() {
  return (
    <div className="pokedexWrapper">
      <Search />
      <PokemonList />
    </div>
  );
}

export default Pokedex;
