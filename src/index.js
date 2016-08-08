import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import CommentBox from './CommentBox';
import './index.css';

let dataVar = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
  <CommentBox obsState={new ObservableState()}/>,
  document.getElementById('root')
);
