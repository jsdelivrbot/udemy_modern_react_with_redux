import React, { Component } from "react";

import BookList from "../containers/book_list.js";
import BookDetail from "../containers/book_detail.js";

export default class App extends Component {
  render() {
    return (
      <div className="div-page">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}