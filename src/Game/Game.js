import React, {Component} from 'react'
import { Animate } from 'react-simple-animate'

import * as Levels from './Levels'
import Tips from './Tips/Tips';

const LEVEL_TRANSITION_START = {
    start   : {opacity: 0},
    end     : {opacity: 1},
    delay   : 0.5,
    duration: 2
}
const LEVEL_TRANSITION_END = {
    start   : {opacity: 1, transform: "translate(0)"},
    end     : {opacity: 0, transform: "translate(-10rem)"},
    delay   : 0.3,
    duration: 1
}
const DEFAULT_STATE = {
    currentLevel: 1,
    levelTips: [],
    tipsNumber: 0,
    transition: LEVEL_TRANSITION_START
}

class Game extends Component {
    state = DEFAULT_STATE

    // arrow fx for binding
    handleNextLevel = () => {
        const {currentLevel} = this.state
        const timeout = (LEVEL_TRANSITION_END.delay + LEVEL_TRANSITION_END.duration) * 1000

        this.setState({transition: LEVEL_TRANSITION_END})

        setTimeout(() => {
            this.setState({
                transition: LEVEL_TRANSITION_START,
                currentLevel: currentLevel + 1,
                tipsNumber: 0,
            })
        }, timeout)
    }

    // arrow fx for binding
    getTipsFromLevel = (levelTips) => {
        this.setState({levelTips: levelTips})
    }

    // arrow fx for binding
    getOneTip = () => {
        const {tipsNumber} = this.state

        this.setState({tipsNumber: tipsNumber + 1})
    }

    render() {
        const {transition, levelTips, tipsNumber} = this.state
        const LevelComponent = Levels[`L${this.state.currentLevel}`]

        const TipsToDisplay = levelTips.slice(0, tipsNumber)

        if (typeof LevelComponent !== 'undefined') {
            return (
                <div className="Level">
                    <Animate
                        play={true}
                        start={transition.start}
                        end={transition.end}
                        delay={transition.delay}
                        duration={transition.start}
                    >
                        <LevelComponent 
                            onGoodAnswer={this.handleNextLevel} 
                            getTips={this.getTipsFromLevel}
                            howManyTips={this.state.tipsNumber}
                        />
                    </Animate>
                    {
                        levelTips.length > 0 ?
                        <Tips 
                            appear={(transition === LEVEL_TRANSITION_START) ? 'appear' : 'disappear'} 
                            tips={TipsToDisplay}
                            maxTips={levelTips.length}
                            getOneTip={this.getOneTip}
                        /> : null
                    }
                </div>
            )
        }

        return (
            <div className="congratulations">
                <h1>congratulations</h1>
                <button onClick={() => this.setState({currentLevel: 1})}>restart the game</button>
            </div>
        )
    }
}

export default Game;