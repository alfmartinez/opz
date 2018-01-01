import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const Episode = ({title,id,mutate}) => <li>
    {title}
    <button onClick={() => mutate({variables: {episode: id}})
        .then(({ data }) => {
            console.log('got data', data);
        }).catch((error) => {
            console.log('there was an error sending the query', error);
        })}>Start</button>
</li>

const createOperation = gql`
mutation createOperation($episode: String!) {
    createOperation(episode: $episode ) {
        id
        episode
    }
}
`;

export default graphql(createOperation)(Episode);