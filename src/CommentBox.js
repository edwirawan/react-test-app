import React, { Component } from 'react';
import {observer} from "mobx-react";
//import logo from './logo.svg';
import './base.css';
import CommentForm from './CommentForm'
import CommentList from './CommentList'

@observer
class CommentBox extends Component {
  obsState;

  constructor(props) {
    super(props);
    this.obsState = props.obsState;
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit({author:authorval,text:textval}) {
    this.obsState.addComment(authorval,textval);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.obsState.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default CommentBox;
