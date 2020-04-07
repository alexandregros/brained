import React, { Component } from 'react'

const tips = [
    <span>try to hit some keys</span>,
    <span>this is japanese for <i>Konami Code</i></span>,
    <span>↑ ↑ ↓ ↓ ← → ← → B A Enter</span>,

]

const DEFAULT_STATE = {
    proposal: [],
    timeoutId: null
}

class L3 extends Component {
    constructor() {
        super()
        this.state = {
            ...DEFAULT_STATE,
            answer: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
        }
    }

    // arrow fx for binding
    componentDidMount = () => {
        this.props.getTips(tips)
		window.addEventListener('keydown', this.handleProposal)
    }

    // arrow fx for binding
    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.handleProposal)
        clearTimeout(this.state.timeoutId)
    }

    // arrow fx for binding
    componentDidUpdate = () => {
        const {proposal, answer} = this.state
        const problemElmt = document.querySelector('.Level3 .problem')

        if (proposal.length) {
            let progress = false

            for (const [index, value] of proposal.entries()) {
                progress = (value === answer[index]) ? (((index + 1) * 100) / answer.length) : 0
                problemElmt.style.backgroundSize = `${progress}%`

                if (value !== answer[index])
                    this.setState({...DEFAULT_STATE})
            }

            if (progress === 100) {
                this.setState({...DEFAULT_STATE})
                this.props.onGoodAnswer()
            }
        }
        else
            problemElmt.style.backgroundSize = '0%'
    }

    // arrow fx for binding
    handleProposal = (event) => {
        const {proposal, timeoutId} = this.state
        const newProposal = [...proposal, parseInt(event.keyCode)]

        clearTimeout(timeoutId)
        const newTimeoutId = setTimeout(() => {
            this.setState({...DEFAULT_STATE})
        }, 2000)

        this.setState({
            proposal: newProposal,
            timeoutId: newTimeoutId
        })
    }

    render() {
        return (
            <div className="Level3">
                <div className="problem">コナミコマンド</div>
            </div>
        )
    }
}

export default L3;