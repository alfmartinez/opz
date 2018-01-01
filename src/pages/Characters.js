import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Navigation from './Navigation';
import CharacterList from "../components/CharacterList";

const Characters = ({data}) => {
    if (data.networkStatus!==7) return 'Loading';

    const {characters} = data;

    return (
        <div>
            <h1>Characters</h1>
            <Navigation />
            <CharacterList characters={characters}/>
        </div>
    );
};

const characters = gql`
query getCharacters {
    characters {
        id
        name
    }
}
`;

export default graphql(characters)(Characters);