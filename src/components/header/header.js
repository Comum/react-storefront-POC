import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../../assets/logo.png';
import SearchBar from '../searchBar/searchBar.js';
import UserField from '../userField/userField.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() { console.log('function', this.props);
        return (
            <div className="header">
                <NavLink to="/">
                    <img className="header--logo m-l-8" src={logo} alt="Logo"/>
                </NavLink>
                <SearchBar />
                <UserField />
            </div>
        );
    }
}

export default Header;