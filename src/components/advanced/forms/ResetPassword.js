import React from 'react';

export default class ResetPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            submit: false,
            password: '',
            confirmPassword: ''
        }
    }
    render() {
        return(
            <>
                <input
                    type="password"
                    className="password"
                    onChange={(event) => this.setState({
                        password: event.target.value,
                        submit: 
                            this.state.confirmPassword.length >= 4 
                            && event.target.value === this.state.confirmPassword
                    })}
                />
                <input
                    type="password"
                    className="confirmPassword"
                    onChange={(event) => this.setState({
                        confirmPassword: event.target.value,
                        submit: 
                            this.state.password.length >= 4 
                            && event.target.value === this.state.password
                    })}
                />
                <input
                    type="submit"
                    disabled={!this.state.submit}
                />

            </>
        )
    }
}