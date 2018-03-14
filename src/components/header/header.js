import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../../assets/logo.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <NavLink to="/">
                    <img className="header--logo m-l-8" src={logo} alt="Logo"/>
                </NavLink>
                <NavLink className="m-r-8" to="/account">My account</NavLink>   
            </div>
        );
    }
}

export default Header;