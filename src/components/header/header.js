import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import logo from '../../assets/logo.png';
import SearchBar from '../searchBar/searchBar.js';
import UserField from '../userField/userField.js';

import {getUserRoutes} from '../../actions';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const userRoutes = this.props.user.userRoutes ? this.props.user.userRoutes : [];

        return (
            <div className="header">
                <NavLink to="/">
                    <img className="header--logo m-l-8" src={logo} alt="Logo"/>
                </NavLink>
                <SearchBar />
                <UserField onClickUserIcon={this.props.onClickUserIcon} userRoutes={userRoutes}/>
            </div>
        );
    }
}

const stateToProps = state => {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {  
    return {
        onClickUserIcon: (...args) => {
            dispatch(getUserRoutes(...args))
    }};
}

export default connect(stateToProps, mapDispatchToProps)(Header);