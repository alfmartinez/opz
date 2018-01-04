import React from 'react';

class TurnManager extends React.Component
{
    constructor(props){
        super(props);
        this.advance = props.advance;
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.state = {play: false};
    }

    play() {
        this.timer = setInterval(this.advance,1000);
        this.setState({play: true});
    }

    pause() {
        clearInterval(this.timer);
        this.setState({play: false});
    }

    render() {
        return <div>
            <button disabled={this.state.play} onClick={this.play}>Play</button>
            <button disabled={!this.state.play} onClick={this.pause}>Pause</button>
        </div>
    }
}

export default TurnManager;