import React, {useState, useEffect} from 'react';
import PokeList from './PokeGrid';
import pokeApi from '../services/pokeapi';

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
      <PokeList allPokemon={allPokemon} />
    </div>
  );
}

export default App;
