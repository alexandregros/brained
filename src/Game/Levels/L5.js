import React, { Component } from 'react'

import Input from './Input'

const answer = 'not that hard to find';
const tips = [
    // <span>The answer is {answer}</span>
]

class L5 extends Component {
    // arrow fx for binding
    componentDidMount = () => {
        this.props.getTips(tips)
    }

    // arrow fx for binding
    handleProposal = (proposal) => {
        if (proposal === answer)
            this.props.onGoodAnswer()
    }

    render() {
        return (
            <div className="Level5">
                <div className="problem">{answer}</div>
                <Input onProposal={this.handleProposal} />
            </div>
        )
    }
}

export default L5;