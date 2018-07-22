import React, { Component } from 'react';
import styled from 'styled-components';

import Dropdown from '../Dropdown/Dropdown';

import { components } from '../../variables/common-style';
import { variables } from '../../variables/variables';

const UserFieldContainer = styled.div`
  width: 36px;
  height: 100%;

  position: relative;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    ${components.icon}
  }

  .icon-user-16 {
    ${components.iconUser16}
  }
`;

const getOptions = optionsType => {
  let options;

  switch(optionsType) {
  case 'user': options = variables.userSignInOptions;
    break;
  case 'admin': options = variables.adminSignInOptions;
    break;
  case 'default': options = variables.defaultSignInOptions;
    break;
  };

  return options;
};

export default class UserField extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      showDropdown: false,
      userRoutes: variables.defaultSignInOptions
    };
  }

  handleClick = () => {
    let optionsType = 'default';
    let options = [];

    if (this.props.isLoggedin) {
      if (this.props.userType === 'user') {
        optionsType = 'user';
      } if (this.props.userType === 'admin') {
        optionsType = 'admin';
      }
    }

    options = getOptions(optionsType);

    this.setState({
      showDropdown: !this.state.showDropdown,
      userRoutes: options
    });
  };

  handleBlur = () => {
    this.setState({
      showDropdown: false
    })
  }

  render() {
    return (
      <UserFieldContainer>
        <div className="icon icon-user-16" onClick={this.handleClick}></div>
        {this.state.showDropdown &&
          <Dropdown props={this.props} routes={this.state.userRoutes} onBlur={this.handleBlur} />
        }
      </UserFieldContainer>
    )
  }
}
