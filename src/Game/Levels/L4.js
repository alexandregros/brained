import React, { Component } from 'react'

import Input from './Input'

const tips = [
    <span>yellow + blue = green</span>,
    <span>what's red + green ?</span>,
    <span>red + green = brown</span>,
]

class L4 extends Component {
    // arrow fx for binding
    componentDidMount = () => {
        this.props.getTips(tips)
    }

    // arrow fx for binding
    handleProposal = (proposal) => {
        if (proposal === 'brown')
            this.props.onGoodAnswer()
    }
    
    render() {
        return (
            <div className="Level4">
                <div className="problem">
                    <span style={{color: 'red'}}>red</span>
                    <span> + </span>
                    <span style={{backgroundColor: 'yellow', color: 'blue'}}>blue</span>
                </div>
                <Input onProposal={this.handleProposal} />
            </div>
        )
    }
}

export default L4;