import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsernameChange(usern) {
        this.setState({ username: usern })
    };

    handlePWChange(pw) {
        this.setState({ password: pw })
    };

    handleLogin() {
        alert(`Username ${this.state.username} Password ${this.state.password}`)
    };

    render() {
        return (
            <div>
                <input
                    onChange={e => this.handleUsernameChange(e.target.value)}
                    type="text"
                />
                <input
                    onChange={e => this.handlePWChange(e.target.value)}
                    type="text"
                />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}

export default Login