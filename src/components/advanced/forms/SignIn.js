import React from 'react';

export default class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            submit: false,
            email: '',
            password: ''
        }
    }
    
    handleEmail(event) {
        this.setState({
            email: event.target.value,
            submit: event.target.value.includes('@') && this.state.password.length >= 4
        });
    }

    handlePW(event) {
        this.setState({
            password: event.target.value,
            submit: this.state.email.includes('@') && event.target.value.length >= 4
        })
    }
    render() {
        return (
            <>
                <input
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmail.bind(this)}
                />
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePW.bind(this)}
                />
                <input
                    type="submit"
                    disabled={!this.state.submit}
                />
            </>
        )
    }
}