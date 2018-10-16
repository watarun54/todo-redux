import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Input} from 'reactstrap'; 


class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            dropdownOpen: false,
            selectedPriority: 0
        }
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state.item, this.state.selectedPriority);
        this.setState({ item: '', selectedPriority: 0 });
    }

    toggleDropDown = () => {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    onRadioBtnClick = (selected) => {
        this.setState({selectedPriority: selected});
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
                            <DropdownItem className="eme-imp-button" onClick={() => this.onRadioBtnClick(0)}>緊急＆重要</DropdownItem>
                            <DropdownItem className="eme-button" onClick={() => this.onRadioBtnClick(1)}>緊急</DropdownItem>
                            <DropdownItem className="imp-button" onClick={() => this.onRadioBtnClick(2)}>重要</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                    <InputGroupAddon addonType="prepend"><Button onClick={this.handleSubmit}>追加</Button></InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

export default FormContainer