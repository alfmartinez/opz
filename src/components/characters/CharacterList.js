import React from 'react';
import Character from "./Character";

const CharacterList = ({characters}) => {
    return <div>
        <h2>{characters.length} character</h2>
        <ul>
            {characters.map(item => <Character key={item.id} {...item} />)}
        </ul>
    </div>
}

export default CharacterList;