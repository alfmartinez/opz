import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import OperationView from "../components/operation/OperationView";

const Operation = ({data}) => {
    if (data.loading) return 'Loading';
    return <div>
        <OperationView {...data} />
    </div>;
}

const getOperation = gql`
query operation($id: String!) {
    operation(id: $id) {
        id
        episode
        team {
            id
            name
            specialReady
            hitpoints
        }
        log {
            message
            id
        }
        opponents {
            template
            hitpoints
        }
    }
} 
`;

export default graphql(getOperation, {
    options: ({match: {params: {id}}}) => ({variables: {id}}),
})(Operation);