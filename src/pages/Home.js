import React from 'react';
import Navigation from './Navigation';

const Home = ({profile}) => (
    <div>
        <h1>Welcome {profile.name}</h1>
        <Navigation />
    </div>
)

export default Home;



