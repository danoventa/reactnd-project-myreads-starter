import React from 'react'

import Book from '../book/Book'

const Bookshelf = (props) => {
    const {myBooks, books, shelfName, onUpdateShelf} = props;
    const parseBookShelves = (book) => {
        const foundBook = myBooks.find(b => b.id === book.id);
        return foundBook ? foundBook.shelf : 'none';
    };

    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.length > 0 && (books.map(book => (
                            <Book
                                key={book.id}
                                id={book.id}
                                image={book.imageLinks.thumbnail}
                                shelf={myBooks ?  parseBookShelves(book) : book.shelf}
                                title={book.title}
                                authors={book.authors}
                                onUpdateShelf={onUpdateShelf}
                            />
                        )))}
                    </ol>
                </div>
            </div>
        </div>
    )
};

export default Bookshelf;