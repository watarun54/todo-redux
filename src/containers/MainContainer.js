import { connect } from 'react-redux';
import * as actions from '../actions/Todo';
import MainContainer from '../components/MainContainer';


const mapStateToProps = state => {
  return {
    todo: state.todo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => {
        dispatch(actions.fetchList());
    },
    onCreate: (item) => {
        dispatch(actions.createProduct(item));
    },
    onDelete: (id) => {
        dispatch(actions.deleteProduct(id));
    },
    onUpdate: (id, item) => {
        dispatch(actions.updateProduct(id, item));
    },
}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
