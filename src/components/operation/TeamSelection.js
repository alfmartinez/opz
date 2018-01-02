import React from 'react';

const TeamSelection = () => <div>
    <div id="selected-team">SELECTED</div>
    <div id="available">AVAILABLE</div>
</div>;

const characters = gql`
query getCharacters {
    characters {
        id
        name
    }
}
`;

export default graphql(characters)(TeamSelection);