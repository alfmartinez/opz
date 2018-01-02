import React from 'react';

const OperationLog = ({log}) => (
    <div>
        <h3>Operation Log</h3>
        <ul>
            {log.map((item,index) => <li key={index}>{item.message}</li>)}
        </ul>
    </div>
);

export default OperationLog;