import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar--input">
                    <input type="text" placeholder="Search your item"/>
                    <div className="SearchBar--search">
                        <div className="icon icon-search-16"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;