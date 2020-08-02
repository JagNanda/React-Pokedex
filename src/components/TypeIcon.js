import React from 'react';
import styled from 'styled-components';
import {ReactComponent as BugIcon} from '../images/icons/bug.svg';
import {ReactComponent as DarkIcon} from '../images/icons/dark.svg';
import {ReactComponent as DragonIcon} from '../images/icons/dragon.svg';
import {ReactComponent as ElectricIcon} from '../images/icons/electric.svg';
import {ReactComponent as FairyIcon} from '../images/icons/fairy.svg';
import {ReactComponent as FightingIcon} from '../images/icons/fighting.svg';
import {ReactComponent as FireIcon} from '../images/icons/fire.svg';
import {ReactComponent as FlyingIcon} from '../images/icons/flying.svg';
import {ReactComponent as GhostIcon} from '../images/icons/ghost.svg';
import {ReactComponent as GrassIcon} from '../images/icons/grass.svg';
import {ReactComponent as GroundIcon} from '../images/icons/ground.svg';
import {ReactComponent as IceIcon} from '../images/icons/ice.svg';
import {ReactComponent as NormalIcon} from '../images/icons/normal.svg';
import {ReactComponent as PoisonIcon} from '../images/icons/poison.svg';
import {ReactComponent as PsychicIcon} from '../images/icons/psychic.svg';
import {ReactComponent as RockIcon} from '../images/icons/rock.svg';
import {ReactComponent as SteelIcon} from '../images/icons/steel.svg';
import {ReactComponent as WaterIcon} from '../images/icons/water.svg';

const IconBackground = styled.div `
    
    background: ${({theme, color}) => theme[color]};
    border-radius: 100%;
    box-shadow: 0px 0px 5px ${({theme, color}) => theme[color]};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width ? props.width : `20px`};
    height: ${props => props.height ? props.height : `20px`};

    &:hover {
        filter: saturate(200%);
        transform: scale(1.1);
        cursor: pointer;
    }

    svg {
        width: 70%;
        height: 70%;
    }
`

const TypeIcon = (props) => {
    let icon;
    let color;
    switch(props.type){
        case "bug":
            icon = <BugIcon />;
            color = "bug";
            break; 
        case "dark":
            icon = <DarkIcon />;
            color = "dark";
            break;
        case "dragon":
            icon = <DragonIcon />;
            color = "dragon";
            break;
        case "electric":
            icon = <ElectricIcon />;
            color = "electric";
            break;
        case "fairy":
            icon = <FairyIcon />;
            color = "fairy";
            break;
        case "fighting":
            icon = <FightingIcon />;
            color = "fighting";
            break;
        case "fire":
            icon = <FireIcon />;
            color = "fire";
            break;
        case "flying":
            icon = <FlyingIcon />;
            color = "flying";
            break;
        case "ghost":
            icon = <GhostIcon />;
            color = "ghost";
            break;
        case "grass":
            icon = <GrassIcon />;
            color = "grass";
            break;
        case "ground":
            icon = <GroundIcon />;
            color = "ground";
            break;
        case "ice":
            icon = <IceIcon />;
            color = "ice";
            break;
        case "normal":
            icon = <NormalIcon />;
            color = "normal";
            break;
        case "poison":
            icon = <PoisonIcon />;
            color = "poison";
            break;
        case "psychic":
            icon = <PsychicIcon />;
            color = "psychic";
            break;
        case "rock":
            icon = <RockIcon />;
            color = "rock";
            break;
        case "steel":
            icon = <SteelIcon />;
            color = "steel";
            break;
        case "water":
            icon = <WaterIcon />;
            color = "water";
            break;
        default: 
            icon = <BugIcon/>;
            color = "white";
    }

    return (
        <IconBackground color={color}>
            {icon}
        </IconBackground>
    )
}

export default TypeIcon;