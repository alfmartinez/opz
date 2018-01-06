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
            character: this.props.id
        }});
    }

    render() {
        const {type} = this.props;
        return <li>
            {type.name} <button onClick={() => this.mutate()}>Rename</button>
        </li>;
    }
}
const rename = gql`
mutation rename($character: ID!) {
    rename(character: $character ) {
        id
        name
    }
}
`;

export default graphql(rename)(Character);