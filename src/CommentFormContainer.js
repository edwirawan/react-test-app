import { connect } from 'react-redux';
import {addComment} from './actions';
import CommentForm from './CommentForm';

const mapDispatchToProps = (dispatch) => {
  return {
    onCommentSubmit: ({author,text}) => {
      dispatch(addComment(author,text));
    }
  };
};

const CommentFormContainer = connect(null,mapDispatchToProps)(CommentForm);

export default CommentFormContainer;
