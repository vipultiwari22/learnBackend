import React from "react";
import { Route, Routes } from "react-router-dom";
import Pokedex from "../Pokedex/Pokedex";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function CoustmRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export default CoustmRoutes;
