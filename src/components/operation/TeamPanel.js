import React from 'react';

const TeamPanel = ({team}) => (
    <div>
        <h3>Team</h3>
        <ul>
            {team.map(item => <li key={item.id}>
                {item.id}
                <button disabled={!item.specialReady}>Use Skill</button>
            </li>)}
        </ul>
    </div>
)

export default TeamPanel;