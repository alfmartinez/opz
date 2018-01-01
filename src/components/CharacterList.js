import React from 'react';

const CharacterList = ({characters}) => {
    const elements = characters.map(({id,name}) => <li key={id}>{name}</li>);

    return <div>
        <h2>{characters.length} character</h2>
        <ul>
            {elements}
        </ul>
    </div>
}

export default CharacterList;