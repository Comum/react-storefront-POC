import React from 'react';
import {NavLink} from 'react-router-dom';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const routes = this.props.routes ? this.props.routes : [];
        let elClasses = ['Dropdown'];

        // TODO: change join to classNames
        // TODO: use componentWillReceiveProps to get the proper props

        elClasses.push('Dropdown--' + this.props.dropdownOptionsName);
console.log('dropdown', this.props);
        return (
            <ul className={elClasses.join(' ')}>
                {routes.map(route =>
                <li className="Dropdown--option" key={route.id}>
                    <NavLink to={route.route}>{route.value}</NavLink>
                </li>)}
            </ul>
        );
    }
}

export default Dropdown;