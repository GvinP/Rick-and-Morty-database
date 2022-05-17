import React from 'react';
import {CharacterType} from "../../store/charactersReducer";
import style from './Characters.module.css'


type CharacterPropsType = {
    character: CharacterType
}

const Character = (props: CharacterPropsType) => {
    return (
        <div className={style.character}>
            <img src={props.character.image} style={{width: '170px'}}/>
            <div>{props.character.name}</div>
        </div>
    );
};

export default Character;