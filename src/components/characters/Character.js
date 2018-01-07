import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';


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
        const {type,xp} = this.props;
        return <li>
            {type.name} ({xp}) <button onClick={() => this.mutate()}>Advance</button>
        </li>;
    }
}
const rename = gql`
mutation advance($character: ID!, $amount: Int!) {
    advance(character: $character, amount: $amount ) {
        id
        xp
    }
}
`;

export default graphql(rename)(Character);