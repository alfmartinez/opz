import React from 'react';
import Arc from "./Arc";

const ArcList = ({arcs}) => <div>
    <ul>
        {arcs.map((item,index) => <Arc key={index} {...item} />)}
    </ul>
</div>;

export default ArcList;