import React from 'react';
import Navigation from './Navigation';
import CharacterList from "../components/characters/CharacterList";

const Characters = ({characters}) => (
    <div>
        <h1>Characters</h1>
        <Navigation/>
        <CharacterList characters={characters}/>
    </div>
);

export default Characters;