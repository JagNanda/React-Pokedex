import React from 'react';
import styled from 'styled-components';
import TypeIcon from './TypeIcon';

const GridCard = styled.div `
    border: ${({theme, typeColor}) => theme[typeColor]}
    background-clip: border-box;
    box-sizing: border-box;
    border: 1px solid ${({theme, typeColor}) => theme[typeColor]};
    border-radius: 10px;
    box-shadow: 0px 0px 4px ${({theme, typeColor}) => theme[typeColor]};  
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

const PokeGridCard = ({pokemon}) => {
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
                <CardName>{pokemon.name}</CardName>
            </CardBody>
        </GridCard>
    )
}

export default PokeGridCard;