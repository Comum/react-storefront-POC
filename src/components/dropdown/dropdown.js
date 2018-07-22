import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { values } from '../../variables/style-guide';

const OptionsList = styled.div`
    width: 200px;

    background-color: ${values.colours["$header-color"]};

    border: 1px solid ${values.colours["$dropdown-border-color"]};
    border-radius: ${values.borders["$border-radius"]};

    position: absolute;
    top: 100%;
    right: 0;

    .OptionsList--entry {
        width: calc(100% - 16px);
        margin: 8px 8px 0;
        text-decoration: none;
    }

    .OptionsList--entry:last-child {
        margin: 8px;
    }
`;

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.props.onBlur();
    }
  }

  render() {
    return (
        <div ref={this.setWrapperRef}>
            <OptionsList>
                <div className="OptionsList--arrow"></div>
                <ul className="OptionsList">
                    {this.props.routes.map(route =>
                    <li className="OptionsList--entry" key={route.id}>
                        <NavLink to={route.route} onClick={this.props.onBlur}>{route.value}</NavLink>
                    </li>)}
                </ul>
            </OptionsList>
        </div>
    )
  }
}
