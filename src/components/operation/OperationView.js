import React from 'react';
import EnemyPanel from "./EnemyPanel";
import OperationLog from "./OperationLog";
import TeamPanel from "./TeamPanel";

class OperationView extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.operation;
        this.advanceTurn = this.advanceTurn.bind(this);
    }

    advanceTurn() {
        var opponents = this.state.opponents;
        const [opponent, ...rest] = opponents;
        const newOpponent = {
            ...opponent,
            hitpoints: opponent.hitpoints-1
        };
        this.setState({opponents: [
            newOpponent,
            ...rest
        ]});
    }

    render() {
        return <div>
            <EnemyPanel opponents={this.state.opponents}/>
            <OperationLog log={this.state.log}/>
            <TeamPanel team={this.state.team}/>
            <button onClick={this.advanceTurn}>Advance</button>
        </div>
    }
}

export default OperationView;