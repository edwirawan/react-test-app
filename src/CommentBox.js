import React, { Component } from 'react';
//import logo from './logo.svg';
import './base.css';
import CommentForm from './CommentForm'
import CommentList from './CommentList'


class CommentBox extends Component {

  /*loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }*/

  /*getInitialState() {
    return {data: dataVar};
  }*/

  constructor(props) {
    super(props);
    this.state = {data:props.data};
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  /*componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }*/

  handleCommentSubmit(comment) {
    //let newState = this.state;
    let newId = this.state.data.length + 1;
    let newEntry = comment;
    newEntry.id = newId;
    //newState.data.push(newEntry); //ANTIPATTERN: this will mutate this.state.
    //this.setState(newState);
    this.setState({data : this.state.data.concat([newEntry])}); //This is safe; concat doesn't modify original list
    //Might be best to use immutable.js for state

    /*$.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });*/
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default CommentBox;
