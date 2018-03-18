import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../../assets/logo.png';
import SearchBar from '../searchBar/searchBar.js';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <NavLink to="/">
                    <img className="header--logo m-l-8" src={logo} alt="Logo"/>
                </NavLink>
                <SearchBar />
                <NavLink className="m-r-8" to="/account">
                    <div className="icon icon-user-16"></div>
                </NavLink>   
            </div>
        );
    }
}

export default Header;