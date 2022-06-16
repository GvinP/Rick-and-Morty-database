import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import style from '../../common/common.module.css'

export const Navigation = () => {
    let location = useLocation()
    let [season, setSeason] = useState(1)
    const seasons = [1, 2, 3, 4, 5]
    const series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    const setClickSeasonButton = (page: number) => {
        setSeason(page)
    }
    if (season > 1) {
        series.length = 10
    }
    return (
        <>
            <div className={style.linksContainer}>
                {seasons.map(s => <span key={s + series[s]} onClick={() => setClickSeasonButton(s)}>{
                    <NavLink className={({isActive}) => isActive ? `${style.link} ${style.active}` : style.link}
                             style={{padding: '10px 20px'}}
                             to={location.pathname === '/' ? `episodes/season/${s}` : `season/${s}`}>
                        <div>{s}</div>
                    </NavLink>
                }</span>)}
            </div>
            <div className={style.linksContainer}>
                {series.map(el =>
                    <NavLink className={({isActive}) => isActive ? `${style.link} ${style.active}` : style.link}
                             style={{padding: '10px 20px'}}
                             key={el + series[el] + series[el]} to={location.pathname === '/' ?
                        `episodes/season/${season}/${season === 1 ? el : (11 + (season - 2) * 10 + el)}`
                        : `season/${season}/${season === 1 ? el : (11 + (season - 2) * 10 + el)}`}>
                        <div>{el}</div>
                    </NavLink>
                )}
            </div>
        </>
    )
}