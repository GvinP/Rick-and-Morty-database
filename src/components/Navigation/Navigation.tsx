import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export const Navigation = () => {
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
            <div>
                {seasons.map(s => <span key={s+series[s]} onClick={() => setClickSeasonButton(s)}
                                        style={{marginRight: '20px'}}>{
                    <NavLink to={`season/${s}`}>
                        <span style={{marginRight: '20px'}}>{s}</span>
                    </NavLink>
                }</span>)}
            </div>
            <div>
                {series.map(el =>
                    <NavLink key={el+series[el]+series[el]} to={`season/${season}/${season === 1 ? el : (11 + (season - 2) * 10 + el)}`}>
                        <span style={{marginRight: '20px'}}>{el}</span>
                    </NavLink>
                )}
            </div>
        </>
    )
}