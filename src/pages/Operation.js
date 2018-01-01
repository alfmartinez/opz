import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import OperationLog from '../components/operation/OperationLog';

const Operation = ({data}) => {
    if (data.loading) return 'Loading';
    const {operation: {id,log}} = data;
    return <div>
        <h1>Operation page {id}</h1>
        <OperationLog log={log} />
    </div>;
}

const getOperation = gql`
query operation($id: String!) {
    operation(id: $id) {
        id
        episode
        log {
            message
            id
        }
    }
} 
`;

export default graphql(getOperation, {
    options: ({match: {params: {id}}}) => ({variables: {id}}),
})(Operation);