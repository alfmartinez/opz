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

    const {characters, arcs} = data;

    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/characters" render={props => <Characters characters={characters}/>}/>
                <Route path="/story" render={props => <Story arcs={arcs} />} />
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

export default graphql(characters)(App);
