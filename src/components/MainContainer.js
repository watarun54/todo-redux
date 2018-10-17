import React from 'react';
import EmergencyAndImportant from './card-components/EmergencyAndImportant';
import Emergency from "./card-components/Emergency";
import Important from "./card-components/Important";
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

  handleSubmit = (item, selectedPriority) => {
    this.props.onCreate(item, selectedPriority);
  }

  handleDelete = (id) => {
    this.props.onDelete(id);
  }

  handleUpdate = (id, updateText, updatedPriority) => {
    this.props.onUpdate(id, updateText, updatedPriority);
  }

  render() {
    console.log("todoList: " + this.props.todo.todoList);
    console.log("emeImpList: " + this.props.todo.emeImpList);
    console.log("emeList: " + this.props.todo.emeList);
    console.log("impList: " + this.props.todo.impList);
    return (
        <div>
          <FormContainer handleSubmit={this.handleSubmit} />
          <div className="main-container">
          <Container>
            <Row>
              <Col>
                <h2>緊急＆重要</h2>
                <div className="itemList">
                {this.props.todo.emeImpList.map((item) => {
                  return (
                    <EmergencyAndImportant key={item.id} item={item} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
                  )
                })}
                </div>
              </Col>
              <Col>
                <h2>緊急</h2>
                <div className="itemList">
                {this.props.todo.emeList.map((item) => {
                  return (
                    <Emergency key={item.id} item={item} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
                  )
                })}
                </div>
              </Col>
              <Col>
                <h2>重要</h2>
                <div className="itemList">
                {this.props.todo.impList.map((item) => {
                  return (
                    <Important key={item.id} item={item} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
                  )
                })}
                </div>
              </Col>
            </Row>
          </Container>
          </div>
        </div>
    );
  }
}

export default MainContainer