import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import TeamPanel from "../components/operation/TeamPanel";
import OperationView from "../components/operation/OperationView";

const Operation = ({data}) => {
    if (data.loading) return 'Loading';
    const {operation: {id,team}} = data;
    return <div>
        <OperationView {...data} />
        <TeamPanel team={team} id={id} />
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