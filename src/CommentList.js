import React, { Component } from 'react';
import logo from './logo.svg';
import './base.css';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;
