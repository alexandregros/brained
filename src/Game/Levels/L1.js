import React, { Component } from 'react'

import Input from './Input'

const tips = [
    <span>10 = 2</span>,
    <span>100 = 4</span>,
    <span>this is a binary number</span>,
    <span>101 = 5</span>
]

class L1 extends Component {
    // arrow fx for binding
    componentDidMount = () => {
        this.props.getTips(tips)
    }
    
    // arrow fx for binding
    handleProposal = (proposal) => {
        if (proposal === '5')
            this.props.onGoodAnswer()
    }

    render() {
        return (
            <div className="Level1">
                <div className="problem">101</div>
                <Input onProposal={this.handleProposal} />
            </div>
        )
    }
}

export default L1;