import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div className="col-md-8 selected-book">
          Select a book to see details
        </div>
      );
    }
    
    return (
      <div className="col-md-8 selected-book">
        <div className="img-display">
          <img src={this.props.book.img} />
        </div>
        <div className="book-details">
          <h3 className="book-title">
            <a target="_blank" rel="noopener noreferrer" href={this.props.book.link}>
              {this.props.book.title}
            </a>
          </h3>
          <div>Author: {this.props.book.author}</div>
          <div>Pages: {this.props.book.pages}</div>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);