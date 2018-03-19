import React from 'react'

import BookImage from './BookImage'
import BookInfo from './BookInfo'

const Book = (props) => {
    const {id, image, shelf, title, authors, onUpdateShelf} = props;

    return (
        <li key={id} className="book-list-item">
            <div className="book">
                <div className="book-top">
                    <BookImage
                        image={image}
                        shelf={shelf}
                        id={id}
                        onUpdateShelf={onUpdateShelf}
                    />
                </div>
                <BookInfo
                    title={title}
                    authors={authors}
                />
            </div>
        </li>
    );
};

export default Book