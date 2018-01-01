import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Story from "./pages/Story";
import Operation from "./pages/Operation";
import Register from "./pages/Register";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/register" component={Register} />
                    <Route path="/characters" component={Characters}/>
                    <Route path="/story" component={Story}/>
                    <Route path="/operation/:id" component={Operation}/>
                </div>
            </Router>
        );
    }
}

export default App;
