import React, {Component} from 'react'
import Bookshelf from "../bookshelf/Bookshelf";
import SearchBar from "./SearchBar";

import * as BooksAPI from "../BooksAPI";

class Search extends Component {
    state = {
        query: '',
        books: []
    };

    searchBooks = (query) => {
        query.length > 1 ? BooksAPI.search(query).then((books) => {
            books
                ? this.setState({books})
                : this.setState({books: []});
        }) : this.setState({books: []});
    };

    onUpdateQuery = query => {
        this.setState({ query: query});
        this.searchBooks(this.state.query);
    };

    render(){
        const { myBooks, onUpdateShelf} = this.props;
        const { query, books } = this.state;

        return (
            <div className="search-books">
                <SearchBar query={query} onUpdateQuery={this.onUpdateQuery}/>
                <div className="search-books-results">
                        <Bookshelf
                            myBooks={myBooks}
                            books={books}
                            onUpdateShelf={onUpdateShelf}
                        />
                </div>
            </div>
        )
    }
};

export default Search;