import React from 'react';
import BookshelfSelector from '../bookshelf/util/BookshelfSelector'

const BookImage = (props) => {
    const {id, image, shelf, onUpdateShelf} = props;
    return (
        <div className="book-cover"
             style={{backgroundImage: `url(${image})`}}>
            <BookshelfSelector id={id} shelf={shelf} onUpdateShelf={onUpdateShelf}/>
        </div>
    );

};

export default BookImage;