let currId = 0;

export const addComment = (author,text) => {
  return {
    type: 'ADD_COMMENT',
    id: currId++,
    author,
    text
  }
}
