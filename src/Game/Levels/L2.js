import React, { Component } from 'react'

import Input from './Input'

const tips = [
    <span>🛏 = BED</span>,
    <span>#BED</span>,
    <span>this is a hexadecimal number</span>,
    <span>#BED = 3053</span>
]

class L2 extends Component {
    // arrow fx for binding
    componentDidMount = () => {
        this.props.getTips(tips)
    }

    // arrow fx for binding
    handleProposal = (proposal) => {
        if (proposal === '3053')
            this.props.onGoodAnswer()
    }
    
    render() {
        return (
            <div className="Level2">
                <div className="problem">#🛏</div>
                <Input onProposal={this.handleProposal} />
            </div>
        )
    }
}

export default L2;