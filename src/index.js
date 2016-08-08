import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import CommentBox from './CommentBox';
import './index.css';
import ObservableState from './ObservableState'

ReactDOM.render(
  <CommentBox obsState={new ObservableState()}/>,
  document.getElementById('root')
);
