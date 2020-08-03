import React from 'react';
import PokeGridCard from './PokeGridCard';
import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 125px);
    justify-content: center;
    justify-items: center;
    margin: 0.5rem;
    @media (max-width: 600px){
        grid-template-columns: repeat(auto-fit, 100px);
    }
`


const PokeList = ({allPokemon, allPokemonImages}) => {
    console.log("reloaded");
    return (
        <GridContainer>
            {allPokemon.map(pokemon => 
              <PokeGridCard key={pokemon.name} pokemon={pokemon} image={allPokemonImages[pokemon.id - 1]}/>  
            )}
        </GridContainer>
    );
}

export default PokeList;