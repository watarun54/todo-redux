import React from 'react';
import DropdownBtn from './card-components/DropdownBtn';
import { InputGroup, InputGroupAddon, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Input} from 'reactstrap'; 


class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            selectedPriority: 0
        }
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state.item, this.state.selectedPriority);
        this.setState({ item: '', selectedPriority: 0 });
    }

    handleSetPriority = (selectedPriority) => {
        this.setState({ selectedPriority: selectedPriority});
    }

    render() {
        return(
            <div className="new-task-container">
                <InputGroup>
                    <Input value={this.state.item} placeholder="New task" onChange={(e) => this.setState({ item: e.target.value })}/>
                    <DropdownBtn selectedPriority={this.state.selectedPriority} handleSetPriority={this.handleSetPriority}/>
                    {/*
                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                        <DropdownToggle caret>
                            
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem className="eme-imp-button" onClick={() => this.onRadioBtnClick(0)}>緊急＆重要</DropdownItem>
                            <DropdownItem className="eme-button" onClick={() => this.onRadioBtnClick(1)}>緊急</DropdownItem>
                            <DropdownItem className="imp-button" onClick={() => this.onRadioBtnClick(2)}>重要</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                
                    */}
                    <InputGroupAddon addonType="prepend"><Button onClick={this.handleSubmit}>Add</Button></InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

export default FormContainer