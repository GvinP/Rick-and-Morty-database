import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {EpisodesPageType, setEpisodesTC} from "../../store/episodesReducer";
import {AppStateType, TypedDispatch} from "../../store/store";
import {NavLink, useLocation, useParams} from "react-router-dom";
import style from './Episodes.module.css'
import {episodesImages} from "../../store/episodesImages";
import commonStyles from '../../common/common.module.css'

const Episodes = () => {
    const episodeId = useParams<'id'>()
    const episodeURL = useLocation()
    const dispatch = useDispatch<TypedDispatch>()
    const episodes = useSelector<AppStateType, EpisodesPageType>((state) => state.episodesPage)
    useEffect(() => {
        let series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        if (episodeId['id'] && +episodeId['id'] > 1) {
            let s = +episodeId['id']
            series.length = 10
            series = series.map(el => (11 + (s - 2) * 10 + el))
        }
        dispatch(setEpisodesTC(series))
    }, [episodeId['id']])
    return (
        <div className={commonStyles.list}>
            {episodes.results.map(ep =>
                <div key={ep.id + ep.name} className={style.episode}>
                    <div>
                        <NavLink
                            to={episodeURL.pathname === '/' ? `episodes/season/1/${ep.id}` : episodeURL.pathname === '/episodes' ? `season/1/${ep.id}` : `${ep.id}`
                            }>
                            <img src={episodesImages[ep.episode]} alt={ep.name} className={style.image}/>
                        </NavLink>
                    </div>
                    <div className={style.episodeName}>{ep.name}</div>
                </div>
            )}
        </div>
    );
};

export default Episodes;


