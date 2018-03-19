import React from 'react'
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
    const {query, onUpdateQuery} = props;

    const handleChange = (query) => {
        onUpdateQuery(query);
    };

    return (
        <div className="search-books-bar">
            <Link to="/" className="close-search" alt="close">
                Close
            </Link>
            <div className="search-books-input-wrapper">
                <input value={query}
                       onChange={event => handleChange(event.target.value)}
                       type="text"
                       placeholder="Search by title or author"/>
            </div>
        </div>
    )
};

export default SearchBar;