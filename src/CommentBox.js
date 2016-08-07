import React, { Component } from 'react';
//import logo from './logo.svg';
import './base.css';
import CommentFormContainer from './CommentFormContainer'
import CommentListContainer from './CommentListContainer'


class CommentBox extends Component {

  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentListContainer />
        <CommentFormContainer />
      </div>
    );
  }
}

export default CommentBox;
