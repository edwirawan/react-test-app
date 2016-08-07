import { connect } from 'react-redux';
import CommentList from './CommentList'

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

const CommentListContainer = connect(mapStateToProps)(CommentList);

export default CommentListContainer;
