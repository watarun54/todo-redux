import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class DropdownBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
        }
    }

    toggleDropDown = () => {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }

    onRadioBtnClick = (selected) => {
        this.props.handleSetPriority(selected);
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown} size="sm">
                <DropdownToggle caret>
                    
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem className="eme-imp-button" onClick={() => this.onRadioBtnClick(0)}>緊急＆重要</DropdownItem>
                    <DropdownItem className="eme-button" onClick={() => this.onRadioBtnClick(1)}>緊急</DropdownItem>
                    <DropdownItem className="imp-button" onClick={() => this.onRadioBtnClick(2)}>重要</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}


export default DropdownBtn