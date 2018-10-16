const initialState = {
  todoList: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'START_REQUEST':
      return {
        todoList: [],
        error: false
      };

    case 'RECEIVE_DATA':
      return action.payload.error
        ? { ...state, error: true }
        : {
            ...state,
            todoList: action.payload.response
        };

    /* case 'ADD_TODO':
      const item = {text: action.payload.item};
      const newState = Object.assign({}, state);
      newState.todoList.push(item);
      return newState;
    */

    default:
      return state;
  }
};