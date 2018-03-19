import React from 'react';

const BookInfo = (props) => {
    const {title, authors} = props;

    const formatAuthors = (authors) => {
        const length = authors ? authors.length : null;
        let formattedAuthors = ``;
        if (length > 1) {
            const lastIndex = length - 1;
            for (let i = 0; i <= lastIndex; i++) {
                formattedAuthors += (i === lastIndex)
                    ? `${authors[lastIndex]}`
                    : `${authors[i]}, `;
            }
        } else if (length > 0) {
            formattedAuthors += `${authors[0]}`;
        }

        return formattedAuthors;
    };

    return (
        <div>
            <div className="book-title">{title}</div>
                <div className="book-authors">
                    {formatAuthors(authors)}
                </div>

        </div>
    )
};

export default BookInfo;