import React from 'react';
import {NavLink} from 'react-router-dom';

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
        let elClasses = ['Dropdown'];

        // TODO: change join to classNames

        elClasses.push('Dropdown--' + this.state.dropdownOptionsName);

        return (
            <ul className={elClasses.join(' ')}>
                {this.state.routes.map(route =>
                <li className="Dropdown--option" key={route.id}>
                    <NavLink to={route.route}>{route.value}</NavLink>
                </li>)}
            </ul>
        );
    }
}

export default Dropdown;