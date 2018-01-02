import React from 'react';

const EnemyPanel = ({opponents}) => (
    <div>
        <h3>Enemies</h3>
        <ul>
            {opponents.map((item,index) => <li key={index}>{item.template} : {item.hitpoints}</li>)}
        </ul>
    </div>
);

export default EnemyPanel;