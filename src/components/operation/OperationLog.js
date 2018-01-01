import React from 'react';

const OperationLog = ({log}) => (
    <ul>
        {log.map((item,index) => <li key={index}>{item.message}</li>)}
    </ul>
);

export default OperationLog;