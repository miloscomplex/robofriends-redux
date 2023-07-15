import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div>
            <input 
                type="search" 
                placeholder="search robots"
                className="pa3 ba b--green bg-lightest-blue br3 mb3"
                onChange={searchChange}
                />
                <button className="pa3 ba br2 ml2">Go</button>

        </div>
    );
};

export default SearchBox;