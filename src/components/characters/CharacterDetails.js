import React from 'react';

const CharacterDetails = ({type, level, xp, stats, hitpoints}) => (
    <div>
        <div>{type.name} lvl {level}</div>
        <div>Hitpoints : {hitpoints.current} / {hitpoints.max} </div>
        <div>Experience :({xp})</div>
        <div>
            Vitality: {stats.vitality} <br />
            Aura: {stats.aura} <br />
            Technique: {stats.technique} <br />
        </div>
    </div>
);

export default CharacterDetails;