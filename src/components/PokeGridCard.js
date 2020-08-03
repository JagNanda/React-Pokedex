import React from 'react';
import styled from 'styled-components';
import TypeIcon from './TypeIcon';

const GridCard = styled.div `
    background-clip: border-box;
    box-sizing: border-box;
    border: 1px solid ${({theme, typeColor}) => theme[typeColor]};
    border-radius: 10px;
    box-shadow: 0px 0px 4px ${({theme, typeColor}) => theme[typeColor]};    
    display: flex;
    flex-direction: column;
    padding: 0.3rem;
    height: 200px;
    width: 100%;
`
const CardHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const CardId = styled.strong `
    font-size: 0.8rem;
`

const CardTypes = styled.div `
    display: flex;
`

const CardBody = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    text-align: center;
`
const CardImg = styled.img `
    max-width: 80%;
`

const CardName = styled.p `
    color: #625d5d;
    font-size: 0.85em;
    text-transform: capitalize;
`

const addLeadingZeros = (id) => {
    let sid = id.toString();
    while(sid.length < 3) {
        sid = "0" + sid;
    }
    return sid;
}

const PokeGridCard = ({pokemon, image}) => {
    const type1 = pokemon.types[0].type.name;
    const type2 = pokemon.types[1]?.type.name;

    return (
        <GridCard typeColor={type1}>
            <CardHeader>
                <CardId>{addLeadingZeros(pokemon.id)}</CardId>
                <CardTypes>
                    <TypeIcon type={type1}/>
                    {type2 ? <TypeIcon type={type2}/> : ""}
                </CardTypes>
            </CardHeader>
            <CardBody>
                <CardImg src={image} alt={pokemon.name}/>
                <CardName>{pokemon.name}</CardName>
            </CardBody>
        </GridCard>
    )
}

export default PokeGridCard;