import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '',password:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name,value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        this.props.mutate({
            variables: {
                ...this.state
            }
        })
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                <fieldset>
                    <label>
                        Username:
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </label><br />
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                </fieldset>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const registerUser = gql`
mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
        id
        username
    }
}
`;

export default graphql(registerUser)(Login);