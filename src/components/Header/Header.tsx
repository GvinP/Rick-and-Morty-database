import React from 'react';
import {NavLink} from "react-router-dom";
import rm from '../../images/RM.jpg'
import style from '../../common/common.module.css'

const Header = () => {
    return (
        <nav>
            <div className={style.linksContainer}>
                <NavLink to={'/episodes'}
                         className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link}
                         style={{fontSize: '24px', textTransform: 'uppercase', marginRight: '30px'}}
                >episodes</NavLink>
                <NavLink to={'/characters'}
                         className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link}
                         style={{fontSize: '24px', textTransform: 'uppercase', marginRight: '30px'}}
                >characters</NavLink>
                <NavLink to={'/locations'}
                         className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link}
                         style={{fontSize: '24px', textTransform: 'uppercase'}}
                >locations</NavLink>
            </div>
            <div>
                <img src={rm} width={500}/>
            </div>

        </nav>
    );
};

export default Header;