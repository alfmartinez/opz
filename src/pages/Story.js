import React from 'react';
import Navigation from './Navigation';
import ArcList from "../components/story/ArcList";
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const Story = ({data}) => {
    if (data.networkStatus!==7) return 'Loading';
    return (
        <div>
            <h1>Story</h1>
            <Navigation/>
            <ArcList arcs={data.arcs}/>
        </div>
    );
};


const arcs = gql`
query getArcs {
    arcs {
        id
        title
        chapters {
            id
            title
            episodes {
                id
                title
            }
        }
    }
}
`;

export default graphql(arcs)(Story);