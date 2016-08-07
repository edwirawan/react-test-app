const comment = (state, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        id: action.id,
        author: action.author,
        text: action.text
      };
    default:
      return state;
  }
}

const commentList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        comment(undefined,action)
      ];
    default:
      return state;
  }
}

export default commentList;
