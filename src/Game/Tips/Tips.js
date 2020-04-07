import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon'
import { Animate } from 'react-simple-animate'

class Tips extends Component {
    state = {
        open: false
    }

    // arrow fx for binding
    componentDidMount = () => {
        const tipsContainer = document.querySelector('.TipsContainer')

        document.addEventListener('click', function(e) {
            if (e.target.closest('.TipsContainer') !== null)
                if (e.target !== document.querySelector('.TipsContainer .icon.close'))
                    return false;

            const isTipsIcon = e.target.classList.contains('icon') && e.target.classList.contains('tips')
            const tipsContainerOpened = tipsContainer.classList.contains('opened')

            if (!isTipsIcon) {
                if (tipsContainerOpened)
                    tipsContainer.classList.remove('opened')
            }
            else {
                if (!tipsContainerOpened)
                    tipsContainer.classList.add('opened')
            }
        }, true)
    }

    // arrow fx for binding
    getOneTip = () => {
        this.props.getOneTip()
    }

    render() {
        const {appear, tips, maxTips} = this.props

        return (
            <div className="TipsWrapper">
                <Icon className={`icon tips ${appear}`} onClick={() => this.setState({open: true})}>help</Icon>

                <div className="TipsContainer">
                    <Icon className="icon close" onClick={() => this.setState({open: false})}>highlight_off</Icon>
                    <div className="tips">
                        {tips.map((tip, index) => (
                            <Animate
                                key={index}
                                play={true}
                                start={{opacity: 0, transform: "translate(5rem)"}}
                                end={{opacity: 1, transform: "translate(0)"}}
                            >
                                <div className="tip">{tip}</div>
                            </Animate>
                        ))}
                    </div>
                    {
                        tips.length < maxTips 
                        && <button onClick={this.getOneTip}>{(tips.length < maxTips - 1) ? 'help' : 'Give me the answer :('}</button>
                    }
                </div>
            </div>
        )
    }
}

export default Tips;