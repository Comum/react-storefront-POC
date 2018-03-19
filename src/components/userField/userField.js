import React from 'react';

import Dropdown from '../dropdown/dropdown.js';

class UserField extends React.Component {
    constructor() {
        super();
        this.state = {
            showDropdown: false,
            userRoutes: []
        };
    }

    handleClick = () => {
        this.props.onClickUserIcon();
        this.setState({
            showDropdown: !this.state.showDropdown
        });
    }

    render() {
        const optionsName = 'user';
        let userRoutes = this.props.userRoutes ? this.props.userRoutes : [];

        console.log('userFields', this.props);

        return (
            <div className="UserField">
                <div className="icon icon-user-16" onClick={this.handleClick}></div>
                {this.state.showDropdown &&
                    <Dropdown dropdownOptionsName={optionsName} routes={userRoutes}/>
                }
                {/*<NavLink to="/account">
                    <div className="icon icon-user-16"></div>
                </NavLink>*/}
            </div>
        );
    }
}

export default UserField;