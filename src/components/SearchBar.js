import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a product"
            />
        </div>
    );
};

export default SearchBar;