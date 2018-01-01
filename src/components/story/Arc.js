import React from 'react';
import Chapter from "./Chapter";

const Arc = ({title,id,chapters}) => <li>
    {title}
    <ul>
        {chapters.map((item,index) => <Chapter key={index} {...item} />)}
    </ul>
</li>

export default Arc;