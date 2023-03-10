import React from "react";

const SearchInput = ({ handleSearch }) => {
    return (
        <div>
            <label htmlFor="search-input">Search:</label>
            <input id="search-input" type="text" onChange={handleSearch} />
        </div>
    );
};

export default SearchInput;
