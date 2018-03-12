import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/account">My account</NavLink>   
            </div>
        );
    }
}

export default Header;