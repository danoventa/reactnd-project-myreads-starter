import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// import search from './search/search'

import * as BooksAPI from './BooksAPI';
import Bookshelves from "./bookshelf/Bookshelves";
import Search from "./search/Search";
import './App.css';

class BooksApp extends Component {
    state = {
        books: []
    };
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    };

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            BooksAPI.getAll().then((books) => {
                this.setState({ books });
            });
        });
    };


    render() {

        const shelves = {
            "currentlyReading": "Currently Reading",
            "wantToRead": "Want to Read",
            "read" : "Read",
            "none" : ""
        };

        const shelfKeys = [
            "currentlyReading",
            "wantToRead",
            "read"
        ];

        return (
          <div className="app">

              <Route
                  exact
                  path='/'
                  render={
                      ({history}) => (
                          <Bookshelves
                              shelfKeys={shelfKeys}
                              shelves={shelves}
                              books={this.state.books}
                              onUpdateShelf={(book, shelf) => {
                                  this.updateShelf(book, shelf);
                                  history.push('/');
                              }}
                            />
                      )
                  }
              />
              <Route
                  exact
                  path='/search'
                  render={
                      () => (
                          <Search myBooks={this.state.books}
                                  shelfName={''}
                                  onUpdateShelf={(book, shelf) => {
                                      this.updateShelf(book, shelf);
                                  }}
                          />
              )}/>
          </div>
        )
    }
}

export default BooksApp
