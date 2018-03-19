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
console.log('dropdown', this.props);
        return (
            <ul className={elClasses.join(' ')}>
                {this.props.routes.map(route =>
                <li className="Dropdown--option" key={route.id}>
                    <NavLink to={route.route}>{route.value}</NavLink>
                </li>)}
            </ul>
        );
    }
}

export default Dropdown;