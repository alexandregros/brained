import React, { Component } from 'react'
import {Animate} from 'react-simple-animate';

class Menu extends Component {
    state = {
        play: false
    }

    render() {
        return (
            <div className="MenuWrapper">
                <Animate
                    play={this.state.play}
                    start={{opacity: 1, transform: "translate(0)"}}
                    end={{opacity: 0, transform: "translate(-10rem)"}}
                    onComplete={() => this.props.onStarted()}
                >
                    <div className="Menu">
                        <h1 className="Menu-title">// brained</h1>

                        <button className="Play" onClick={() => this.setState({play: true})}>play</button>
                    </div>
                </Animate>
            </div>
        )
    }
}

export default Menu;