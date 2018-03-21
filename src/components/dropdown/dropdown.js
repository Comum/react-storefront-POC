import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            dropdownOptionsName: this.props.dropdownOptionsName,
            routes: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dropdownOptionsName: nextProps.dropdownOptionsName,
            routes: nextProps.routes
        })
    }

    render() {
        let elClasses = classNames({
            'Dropdown': true,
            ['Dropdown--' + this.state.dropdownOptionsName]: true
        });

        return (
            <ul className={elClasses}>
                {this.state.routes.map(route =>
                <li className="Dropdown--option" key={route.id}>
                    <NavLink to={route.route}>{route.value}</NavLink>
                </li>)}
            </ul>
        );
    }
}

export default Dropdown;