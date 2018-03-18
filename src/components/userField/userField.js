import React from 'react';

import Dropdown from '../dropdown/dropdown.js';

class UserField extends React.Component {
    constructor() {
        super();
        this.state = {
            showDropdown: false
        };
    }

    handleClick = () => {
        this.setState({
            showDropdown: !this.state.showDropdown
        });
    }

    render() {
        const optionsName = 'user';

        return (
            <div className="UserField" onClick={this.handleClick}>
                <div className="icon icon-user-16"></div>
                {this.state.showDropdown &&
                    <Dropdown dropdownOptionsName={optionsName} />
                }
                {/*<NavLink to="/account">
                    <div className="icon icon-user-16"></div>
                </NavLink>*/}
            </div>
        );
    }
}

export default UserField;