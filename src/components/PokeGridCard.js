import React from 'react';
import styled from 'styled-components';
import TypeIcon from './TypeIcon';

const GridCard = styled.div `
    box-sizing: border-box;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 2px 2px 0px gray;  
    height: 200px;
    padding: 0.3rem; 
`
const CardHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const CardId = styled.strong `
`

const CardTypes = styled.div `
    display: flex;
`

const CardBody = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const CardName = styled.p `
    font-size: 0.9em;
    text-transform: capitalize;
`

const PokeGridCard = ({pokemon}) => {
    return (
        <GridCard>
            <CardHeader>
                <CardId>{pokemon.id}</CardId>
                <CardTypes>
                    <TypeIcon type={pokemon.types[0].type.name}/>
                    {pokemon.types[1] ? <TypeIcon type={pokemon.types[1].type.name}/> : ""}
                </CardTypes>
            </CardHeader>
            <CardBody>
                <CardName>{pokemon.name}</CardName>
            </CardBody>
        </GridCard>
    )
}

export default PokeGridCard;