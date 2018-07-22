import React, { Component } from 'react';
import styled from 'styled-components';

import { values } from '../../variables/style-guide';
import SearchBar from '../SearchBar/SearchBar';
import UserField from '../UserField/UserField';

const HeaderBar = styled.div`
  width: 100%;
  height: 50px;

  background-color: ${values.colours["$header-color"]};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoArea = styled.img`
  height: 40px;
  margin-left: 8px;
  cursor: pointer;
`;

export default class Header extends Component {

  render() {
    return (
      <HeaderBar>
        <LogoArea src="../../assets/logo.png" alt="Logo"/>
        <SearchBar />
        <UserField />
      </HeaderBar>
    )
  }
}
