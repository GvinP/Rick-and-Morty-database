import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <NavLink to={'/episodes'}>episodes</NavLink>
            <NavLink to={'/characters'}>characters</NavLink>
            <NavLink to={'/locations'}>locations</NavLink>
        </nav>
    );
};

export default Header;