import React, {useEffect} from 'react';
import {LocationType, setLocationTC} from "../../store/locationsReducer";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, TypedDispatch} from "../../store/store";
import {CharacterType, getCharactersTC} from "../../store/charactersReducer";
import Character from "../Characters/Character";
import style from './Locations.module.css'


const LocationPage = () => {
    const locationId = useParams<'id'>()
    const dispatch = useDispatch<TypedDispatch>()
    const location = useSelector<AppStateType, LocationType>((state) => state.locationsPage.locations[0])
    const characters = useSelector<AppStateType, Array<CharacterType>>((state) => state.charactersPage.results)

    useEffect(() => {
        if (locationId.id)
            dispatch(setLocationTC(locationId.id))
    }, [dispatch, locationId])
    useEffect(() => {

        dispatch(getCharactersTC(location.residents.map(ch => +ch.substr(42))))
        console.log(location.residents.map(ch => +ch.substr(42)))
        console.log(location)
    }, [location, dispatch])

    return (
        <div>
            <div>{location.name}</div>
            {/*<div>{location.dimension}</div>*/}
            {/*<div>{location.type}</div>*/}
            {/*<div>{location.created}</div>*/}
            {/*<div>{location.id}</div>*/}
            <div className={style.locationsList}>
                {characters.map(ch => <Character key={ch.id + ch.name + ch.name} character={ch}/>)}
            </div>

        </div>
    );
};

export default LocationPage;