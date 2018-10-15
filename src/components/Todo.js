import React from 'react';

export default class Todo extends React.Component {
  state = {
    todo: ''
  }

  componentWillMount() {
    this.props.onMount();
  }

  render() {
    console.log(this.props);
    
    const list = this.props.todo.todoList.map((todo, index) => <li key={index}>{todo.text}</li>)

    return (
        <div>
        <input type="text" onChange={e => this.setState({ todo: e.target.value })} />
        <button onClick={() => this.props.addTodo(this.state.todo)}>追加</button><br />
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}