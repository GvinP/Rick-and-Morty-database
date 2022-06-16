import React from 'react';
import {CharacterType} from "../../store/charactersReducer";
import style from './Characters.module.css'


type CharacterPropsType = {
    character: CharacterType
}

const Character = (props: CharacterPropsType) => {
    return (
        <div className={style.character}>
            <div className={style.imageBox}>
                <img src={props.character.image} className={style.image}/>
            </div>

            <div className={style.characterInfo}>
                <div className={style.name}>{props.character.name}</div>
                <div>
                    <span className={style.statusIcon}
                          style={{backgroundColor: `${props.character.status === 'Alive'?'green'
                                  :props.character.status === 'Dead'?'red':''}`}}></span>
                    <span className={style.status}>{props.character.status} - </span>
                    <span className={style.species}>{props.character.species}</span>
                </div>
                <div className={style.location}>Last known location:</div>
                <div className={style.locationName}>{props.character.location.name ? props.character.location.name: null}</div>
                <div className={style.location}>Origin location</div>
                <div className={style.locationName}>{props.character.origin.name ? props.character.origin.name: null}</div>
            </div>
        </div>
    );
};

export default Character;