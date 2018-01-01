import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {withRouter} from 'react-router-dom';

const Episode = ({title,id,mutate, history}) => <li>
    {title}
    <button onClick={() => mutate({variables: {episode: id}})
        .then(({ data }) => {
            console.log('got data', data);
            history.push('/operation/'+data.createOperation.id)
        }).catch((error) => {
            console.log('there was an error sending the query', error);
        })}>Start</button>
</li>

const createOperation = gql`
mutation createOperation($episode: String!) {
    createOperation(episode: $episode ) {
        episode
        id
    }
}
`;

export default withRouter(graphql(createOperation)(Episode));