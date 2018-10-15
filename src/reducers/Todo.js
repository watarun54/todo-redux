const getList = response => {
  const list = response.posts;
  console.log(list);
  return list;
};

const initialState = {
  todoList: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'START_REQUEST':
      return {
        // categoryを状態に保持
        todoList: [],
        error: false
      };

    // データ受信
    case 'RECEIVE_DATA':
      return action.payload.error
        ? { ...state, error: true }
        : {
            ...state,
            todoList: getList(action.payload.response)
        };

    case 'ADD_TODO':
      // 新しく追加するTODO
      const todo = {text: action.payload.todo};
      // stateを複製して追加
      const newState = Object.assign({}, state);
      newState.todoList.push(todo);
      return newState;
    default:
      return state;
  }
};