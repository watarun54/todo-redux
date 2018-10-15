import axios from 'axios'


export const addTodo = (todo) => {
    return { 
      type: 'ADD_TODO',
      payload: { todo: todo }
    };
  }
  
const API_URL = 'https://watarun54.com/api/chat';

//　リクエスト開始
const startRequest = todo => ({
    type: 'START_REQUEST',
    payload: { todo },
});
//　レスポンス受信
const receiveData = (error, response) => ({
    type: 'RECEIVE_DATA',
    payload: { error, response },
});
// リクエスト完了
const finishRequest = todo => ({
    type: 'FINISH_REQUEST',
    payload: { todo },
});

export const fetchList = () => {
    // getState関数でstate.todoにアクセスする
    return async (dispatch, getState) => {
        const todo = getState().todo;
        
        dispatch(startRequest(todo));

        axios.get(`${API_URL}`)
            .then(res => {
                console.log(res.data)
                const response = res.data;
                dispatch(receiveData(null, response))
            }).catch(err => 
                dispatch(receiveData(err))
            )

        dispatch(finishRequest(todo));
    };
};