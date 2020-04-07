import React, { Component } from 'react'

class Input extends Component {
    state = {
        inputValue: ''
    }

    // arrow fx for binding
    handleInputChange = ({target: {value}}) => {
        this.setState({inputValue: value})

        this.props.onProposal(value)
    }

    render() {
        return (
            <div className="InputWrapper">
                <input 
                    type="text"
                    autoFocus={true}
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                />
            </div>
        )
    }
}

export default Input;