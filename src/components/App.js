import React, {useState, useEffect} from 'react';
import PokeList from './PokeGrid';
import pokeApi from '../services/pokeapi';
import {ThemeProvider} from 'styled-components';

const typesTheme = {
  bug: "#92BC2C",
  dark: "#595761",
  dragon: "#0C69C8",
  electric: "#F2D94E",
  fairy: "#EE90E6",
  fighting: "#D3425F",
  fire: "#FBA54C",
  flying: "#A1BBEC",
  ghost: "#5F6DBC",
  grass: "#5FBD58",
  ground: "#C9BB8A",
  ice: "#75D0C1",
  normal:  "#A0A29F",
  poison: "#B763CF", 
  psychic: "#FA8581",
  rock: "#C9BB8A",
  steel: "#5695A3",
  water: "#539DDF"
}; 

const App = () => {

  const [allPokemon, setAllPokemon] = useState([]);

  //retrieve all pokemon and add them to browser cache storage if the cache "pokemon" doesn't already exist
  useEffect(() => {

    const getAllPokemon = async () => {
      const result = await pokeApi.getAllPokemon();
      setAllPokemon(result);
    } 
    getAllPokemon();
  },[]);


  useEffect(() => console.log("Pokemon state updated",allPokemon), [allPokemon] );

  return (
    <div className="App">
      <ThemeProvider theme={typesTheme}>
        <PokeList allPokemon={allPokemon} />
      </ThemeProvider>
    </div>
  );
}

export default App;
