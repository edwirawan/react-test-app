import commentList from './commentList'

function commentAppReducer(state = {},action) {
  return {
    data: commentList(state.data,action)
  };
}

export default commentAppReducer;
