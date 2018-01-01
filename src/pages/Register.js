import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class Register extends Component {
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
mutation registerUser($username: String!, $password: String!) {
    registerUser(username: $username, password: $password) {
        token
    }
}
`;

export default graphql(registerUser)(Register);