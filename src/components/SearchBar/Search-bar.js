import React, { Component } from 'react';
import styled from 'styled-components';

import { values } from '../../variables/style-guide';

const SearchBarContainer = styled.div`
    width: 300px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    .SearchBarInputContainer {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
    }

    .SearchBarIconContainer {
        width: 40px;
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        border-left: 2px solid ${values.colours["$color-divider"]};

        position: absolute;
        top: 10px;
        right: 2px;

        &:hover {
            background-color: ${values.colours["$color-hover"]};
        }
    }

    .SearchBarIcon {
        width: 20px;
        height: 20px;

        background-repeat: no-repeat;
        background-position: center;

        background-image: url("./assets/icons/search-16.svg");
    }
`;

export default class SearchBar extends Component {
  render() {
    return (
      <SearchBarContainer>
        <div className="SearchBarInputContainer">
            <input type="text" placeholder="Search your item"/>
            <div className="SearchBarIconContainer">
                <div className="SearchBarIcon"></div>
            </div>
        </div>
      </SearchBarContainer>
    )
  }
}
