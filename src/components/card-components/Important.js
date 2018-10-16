import React from 'react';
import { Card, CardBody, CardText, FormGroup, Input, Button } from 'reactstrap';


class Important extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updateText: '',
        }
    }

    handleDelete = () => {
        this.props.handleDelete(this.props.item.id);
    }

    handleUpdate = () => {
        this.props.handleUpdate(this.props.item.id, this.state.updateText);
        this.setState({ updateText: '' });
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardText>{this.props.item.text}</CardText>
                        <FormGroup>
                            <Input value={this.state.updateText} placeholder={this.props.item.text} onChange={e => this.setState({ updateText: e.target.value })}/>
                        </FormGroup>
                        <div>
                            <Button onClick={this.handleUpdate}>更新</Button>{' '}
                            <Button onClick={this.handleDelete}>削除</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
      }
}


export default Important