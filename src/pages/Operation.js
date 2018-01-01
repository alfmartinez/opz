import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const Operation = ({data}) => {
    if (data.loading) return 'Loading';
    const {operation: {id,episode}} = data;
    return <div>
        <h1>Operation page {id}</h1>
    </div>;
}

const getOperation = gql`
query operation($id: String!) {
    operation(id: $id) {
        id
        episode
    }
} 
`;

export default graphql(getOperation, {
    options: ({match: {params: {id}}}) => ({variables: {id}}),
})(Operation);