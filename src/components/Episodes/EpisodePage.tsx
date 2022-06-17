import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, TypedDispatch} from "../../store/store";
import {EpisodeType, setEpisodeTC} from "../../store/episodesReducer";
import {episodesImages} from "../../store/episodesImages";
import {CharacterType, getCharactersTC} from "../../store/charactersReducer";
import Character from "../Characters/Character";
import style from './Episodes.module.css'
import commonStyles from '../../common/common.module.css'


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
    }, [episode, dispatch])
    return (
        <div>
            <div className={style.episode}>
                <img src={episodesImages[episode.episode]} alt={episode.name} className={style.image}/>
                <div className={style.episodeName}>{episode.name}</div>
                <div className={style.episodeName}>{episode.air_date}</div>
            </div>

            <div className={commonStyles.list}>
                {characters.map(ch => <Character key={ch.id + ch.name} character={ch}/>)}
            </div>
        </div>
    );
};

export default EpisodePage;

