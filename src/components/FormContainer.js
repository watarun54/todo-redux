import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Input} from 'reactstrap'; 


class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            dropdownOpen: false
        }
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state.item);
        this.setState({ item: '' });
    }

    toggleDropDown = () => {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    render() {
        return(
            <div>
                <InputGroup>
                    <Input value={this.state.item} placeholder="Enter text" onChange={(e) => this.setState({ item: e.target.value })}/>
                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                        <DropdownToggle caret>
                            優先順位
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Action</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                    <InputGroupAddon addonType="prepend"><Button onClick={this.handleSubmit}>追加</Button></InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

export default FormContainer