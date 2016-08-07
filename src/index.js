import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CommentBox from './CommentBox';
import commentApp from './reducers'
import './index.css';

let store = createStore(commentApp);

ReactDOM.render(
  <Provider store={store}>
    <CommentBox />
  </Provider>,
  document.getElementById('root')
);
