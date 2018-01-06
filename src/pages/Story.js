import React from 'react';
import Navigation from './Navigation';
import ArcList from "../components/story/ArcList";

const Story = ({arcs}) => (
    <div>
        <h1>Story</h1>
        <Navigation/>
        <ArcList arcs={arcs}/>
    </div>
);

export default Story;