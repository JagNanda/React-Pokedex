import 'normalize.css';
import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import PokeGrid from './PokeGrid';
import pokeApi from '../services/pokeapi';
import pokeRes from '../services/pokeres';

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
  ground: "#DA7C4D",
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
  const [allPokemonImages, setAllPokemonImages] = useState([]);

  //retrieve all pokemon and add them to browser cache storage if the cache "pokemon" doesn't already exist
  useEffect(() => {

    const getAllPokemon = async () => {
      const pokemon = await pokeApi.getAllPokemon();
      setAllPokemon(pokemon);
    } 
    getAllPokemon();
  },[]);

  useEffect(() => {
    
    const getAllPokemonImages = async () => {
      const pokemonImgs = await pokeRes.getAllPokemonImages();
      setAllPokemonImages(pokemonImgs);
    }

    getAllPokemonImages();
  }, []);
  
  return (
    <div className="App">
      <ThemeProvider theme={typesTheme}>
        <PokeGrid
          allPokemon={allPokemon} 
          allPokemonImages={allPokemonImages}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
