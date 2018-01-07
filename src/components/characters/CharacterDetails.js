import React from 'react';

const CharacterDetails = ({type, level, xp}) => (
    <div>
        {type.name} lvl {level} ({xp})
    </div>
);

export default CharacterDetails;