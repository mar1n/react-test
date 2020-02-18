import React from 'react';

export default class UserNameAvailable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            message: 'Please enter your username'
        };
    }
    render() {
        return (
            <>
                <input
                    type="text"
                    onChange={(event) => {
                        this.props.existing.includes(event.target.value)
                            ? this.setState({
                                message: 'The username is already taken',
                                submit: false
                            })
                            : this.props.forbidden.includes(event.target.value.toLowerCase())
                                ? this.setState({
                                    message: 'The username is not allowed',
                                    submit: false
                                })
                                : this.setState({
                                    message: 'The username is available!',
                                    submit: true
                                })
                    }}
                />
                <label
                    className='message'>
                    {this.state.message}
                </label>
                <input
                    type='submit'
                    disabled={!this.state.submit}
                />
            </>
        )
    }
}