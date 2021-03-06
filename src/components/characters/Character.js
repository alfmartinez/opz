import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import CharacterDetails from "./CharacterDetails";


class Character extends React.Component {
    constructor(props) {
        super(props);
        this.mutate = this.mutate.bind(this);
    }

    mutate() {
        this.props.mutate({variables: {
            character: this.props.id,
            amount: 60
        }});
    }

    render() {
        return <li>
            <CharacterDetails {...this.props} /> <button onClick={() => this.mutate()}>Advance</button>
        </li>;
    }
}
const rename = gql`
mutation advance($character: ID!, $amount: Int!) {
    advance(character: $character, amount: $amount ) {
        id
        xp
        level
        stats {
            vitality
            aura
            technique
        }
        hitpoints {
            current
            max
        }
    }
}
`;

export default graphql(rename)(Character);