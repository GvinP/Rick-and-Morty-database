import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, TypedDispatch} from "../../store/store";
import {EpisodeType, setEpisodeTC} from "../../store/episodesReducer";
import {episodesImages} from "../../store/episodesImages";
import {CharacterType, getCharactersTC} from "../../store/charactersReducer";
import Character from "../Characters/Character";
import style from './Episodes.module.css'


const EpisodePage = () => {

    const episodeId = useParams<'id'|'epId'>()
    const dispatch = useDispatch<TypedDispatch>()
    const episode = useSelector<AppStateType, EpisodeType>(state => state.episodesPage.results[0])
    const characters = useSelector<AppStateType, Array<CharacterType>>(state => state.charactersPage.results)
    useEffect(() => {
        if (episodeId.epId)
            dispatch(setEpisodeTC(episodeId.epId))
    }, [episodeId, dispatch])
    useEffect(() => {
        dispatch(getCharactersTC(episode.characters.map(ch => +ch.substr(42))))
        console.log(episode.characters.map(ch => +ch.substr(42)))
    }, [episode, dispatch])
    return (
        <div>
            <div>
                <img src={episodesImages[episode.episode]} alt={episode.name}/>
            </div>
            <div>name: {episode.name}</div>
            <div> air date: {episode.air_date}</div>
            <div className={style.episodesList}>
                {characters.map(ch => <Character key={ch.id+ch.name} character={ch}/>)}
            </div>
        </div>
    );
};

export default EpisodePage;

