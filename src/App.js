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

    const {characters} = data;

    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/characters" render={props => <Characters characters={characters}/>}/>
                <Route path="/story" component={Story}/>
            </div>
        </Router>
    );
}

const characters = gql`
{
    characters {
        id
        name
    }
}
`;

export default graphql(characters)(App);
