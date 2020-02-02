import React from 'react';

export default class InputEmail extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            confirmEmail: '',
            message: ''
        }
        this.changeEmail = this.changeEmail.bind(this);
        this.changeConfirmEmail = this.changeConfirmEmail.bind(this);
    }
    changeEmail(e) {
        this.setState({ email: e.target.value });
    }

    changeConfirmEmail(e) {
        this.setState({ confirmEmail: e.target.value });
    }
    render() {
        return(
            <>
                <input
                    className='email'
                    type='text'
                    value={this.state.email}
                    onChange={(e) => this.changeEmail(e)}
                />
                <input
                    className='confirmEmail'
                    type='text'
                    value={this.state.confirmEmail}
                    onChange={(e) => this.changeConfirmEmail(e)}
                />
                <label>
                    {this.state.email === this.state.confirmEmail 
                    ? `Great! Emails match` 
                    : `Oh! Emails do not match!`}
                </label>
            </>
        )
    }
}