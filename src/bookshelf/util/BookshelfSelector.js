import React, {Component} from 'react';

class BookshelfSelector extends Component {

    handleChange(book, shelf) {
        this.props.onUpdateShelf(book, shelf);
    }

    render(){
        const {id, shelf} = this.props;

        const book = {
            id: id
        };

        return (
            <div className="book-shelf-changer">
                <select defaultValue={shelf} onChange={(e) => this.handleChange(book, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookshelfSelector;