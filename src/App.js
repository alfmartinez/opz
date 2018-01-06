import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Story from "./pages/Story";


const App = ({data}) => {
    if (data.networkStatus !== 7) return 'Loading';

    const {characters, arcs, profile} = data;

    return (
        <Router>
            <div>
                <Route exact path="/" render={props => <Home profile={profile}/>}/>
                <Route path="/characters" render={props => <Characters characters={characters}/>}/>
                <Route path="/story" render={props => <Story arcs={arcs} />} />
            </div>
        </Router>
    );
}

const characters = gql`
query ($playerId: String!) {
    profile(playerId: $playerId) {
        name
        playerId
    }
    characters(playerId: $playerId) {
        id
        type {
            id
            name
        }
    }
    arcs(playerId: $playerId) {
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

export default graphql(characters,{
    options: () => ({variables: {playerId: localStorage.getItem('playerId')}}),
})(App);
