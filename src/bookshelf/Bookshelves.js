import React from 'react'
import { Link } from 'react-router-dom';

import Bookshelf from "./Bookshelf";

const Bookshelves = (props) => {
    const {shelfKeys, shelves, books, onUpdateShelf} = props;
    return (
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelfKeys.map(shelf =>  (
                        <Bookshelf
                            key={shelfKeys.indexOf(shelf)}
                            shelfName={shelves[shelf]}
                            books={books.filter(book => book.shelf === shelf)}
                            onUpdateShelf={onUpdateShelf}
                        />))}
                </div>
                <div className="open-search">
                    <Link to="/search" className="open-search" alt="Add a book">
                        Add a book
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Bookshelves;