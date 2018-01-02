import React from 'react';
import EnemyPanel from "./EnemyPanel";
import OperationLog from "./OperationLog";

const OperationView = ({operation: {log, opponents}}) => <div>
    <EnemyPanel opponents={opponents}/>
    <OperationLog log={log}/>
</div>;

export default OperationView;