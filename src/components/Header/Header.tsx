import React from 'react';
import {NavLink} from "react-router-dom";
import rm from '../../images/RM.jpg'
import style from './Header.module.css'

const Header = () => {
    return (
        <nav>
            <div className={style.linksContainer}>
                <NavLink to={'/episodes'}
                         className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link}
                         style={{marginRight: '1em'}}
                >episodes</NavLink>
                <NavLink to={'/characters'}
                         className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link}
                         style={{marginRight: '1em'}}
                >characters</NavLink>
                <NavLink to={'/locations'}
                         className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link}
                >locations</NavLink>
            </div>
            <div>
                <img src={rm} className={style.image}/>
            </div>

        </nav>
    );
};

export default Header;