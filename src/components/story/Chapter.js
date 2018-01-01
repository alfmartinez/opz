import React from 'react';
import Episode from "./Episode";

const Chapter = ({title,id,episodes}) => <li>
    {title}
    <ul>
        {episodes.map((item,index) => <Episode key={index} {...item}/>)}
    </ul>
</li>

export default Chapter;