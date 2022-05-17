import React from 'react';
import style from './Locations.module.css'
import {LocationType} from "../../store/locationsReducer";


type LocationPropsType = {
    location: LocationType
}

const Character = (props: LocationPropsType) => {
    return (
        <div className={style.location}>
            <div>{props.location.name}</div>
            {/*<div>{props.location.dimension}</div>*/}
            {/*<div>{props.location.type}</div>*/}
            {/*<div>{props.location.created}</div>*/}
            {/*<div>{props.location.id}</div>*/}
        </div>
    );
};

export default Character;