import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {EpisodesPageType, setEpisodesTC} from "../../store/episodesReducer";
import {AppStateType, TypedDispatch} from "../../store/store";
import style from './Episodes.module.css'
import {episodesImages} from "../../store/episodesImages";
import {NavLink} from "react-router-dom";

const Episodes = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const episodes = useSelector<AppStateType, EpisodesPageType>((state) => state.episodesPage)
    let [season, setSeason] = useState(1)
    const seasons = [1, 2, 3, 4, 5]

    const setClickSeasonButton = (page: number) => {
        setSeason(page)
    }

    useEffect(() => {
        dispatch(setEpisodesTC())
    }, [dispatch])

    let filtratedEpisodes = episodes.results.filter((ep) => +ep.episode[2] === season)
    console.log(filtratedEpisodes)
    return (
        <div>
            <div>
                {seasons.map(s => <span onClick={() => setClickSeasonButton(s)}
                                        style={{marginRight: '20px'}}>{s}</span>)}
            </div>
            <div>
                {filtratedEpisodes.map(el =>
                    <NavLink to={`episode/${el.episode[4]}${el.episode[5]}`}>
                        <span style={{marginRight: '20px'}}>{el.episode[4]}{el.episode[5]}</span>
                    </NavLink>
                )}
            </div>
            <div className={style.episodesList}>
                {episodes.results.filter((ep) => +ep.episode[2] === season).map(ep =>
                    <div>
                        <div>
                            <NavLink to={`episode/${ep.id}`}>
                                <img src={episodesImages[ep.episode]} alt={ep.name}/>
                            </NavLink>
                        </div>
                        <div>{ep.name}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Episodes;