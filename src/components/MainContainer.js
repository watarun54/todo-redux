import React from 'react';
import EmergencyAndImportant from './card-components/EmergencyAndImportant.js';
import FormContainer from './FormContainer';
import { Container, Row, Col } from 'reactstrap';


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
    this.props.onMount();
  }

  handleSubmit = (item) => {
    this.props.onCreate(item);
  }

  handleDelete = (id) => {
    this.props.onDelete(id);
  }

  handleUpdate = (id, updateText) => {
    this.props.onUpdate(id, updateText);
  }

  render() {    
    return (
        <div>
          <FormContainer handleSubmit={this.handleSubmit} />

          <Container>
            <Row>
              <Col>
                <h2>緊急＆重要</h2>
                <div className="itemList">
                {this.props.todo.todoList.map((item) => {
                  return (
                    <EmergencyAndImportant key={item.id} item={item} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
                  )
                })}
                </div>
              </Col>
              <Col>
                <h2>緊急</h2>
                <div className="itemList">
                {this.props.todo.todoList.map((item) => {
                  return (
                    <EmergencyAndImportant key={item.id} item={item} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
                  )
                })}
                </div>
              </Col>
              <Col>
                <h2>重要</h2>
                <div className="itemList">
                {this.props.todo.todoList.map((item) => {
                  return (
                    <EmergencyAndImportant key={item.id} item={item} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
                  )
                })}
                </div>
              </Col>
            </Row>
          </Container>
          
        </div>
    );
  }
}

export default MainContainer