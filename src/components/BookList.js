//rcc
import React, { Component } from "react";
import Book from "./Book";
import BooksData from "./BooksData";

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: BooksData
    };
  }

  render() {
    return (
      <div>
        <h2>Bestseller of this week</h2>
        {this.state.books.map(book => (
          <Book key={book.id} info={book} />
        ))}
      </div>
    );
  }
}

export default BookList;
