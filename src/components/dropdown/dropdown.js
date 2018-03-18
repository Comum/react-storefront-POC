import React from 'react';
import {NavLink} from 'react-router-dom';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let elClasses = ['Dropdown'];

        elClasses.push('Dropdown--' + this.props.dropdownOptionsName);

        return (
            <ul className={elClasses.join(' ')}>
                <li className="Dropdown--option">First</li>
                <li className="Dropdown--option">Second</li>
                <li className="Dropdown--option">Third</li>
            </ul>
        );
    }
}

export default Dropdown;