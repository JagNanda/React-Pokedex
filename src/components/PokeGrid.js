import React from 'react';
import PokeInfo from './PokeGridCard';
import styled from 'styled-components';

const GridContainer = styled.div`
    align-items: center;
    // border-left: 1px solid black;
    // border-top: 1px solid black;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    margin: 0 10%;
    
`


const PokeList = ({allPokemon}) => {
    return (
        <GridContainer>
            {allPokemon.map(pokemon => 
              <PokeInfo key={pokemon.name} pokemon={pokemon}/>  
            )}
        </GridContainer>
    );
}

export default PokeList;