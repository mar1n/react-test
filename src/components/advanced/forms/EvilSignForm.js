import React from 'react';

export default class EvilSignForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    handleEmail(event) {
        let e = event.target.value.split(/[@.]+/);
        this.setState({
            email: e[1] + '@' + e[0] + '.' + e[2]
        });
    }
    handlePW(event) {
        this.setState({
            password: btoa(event.target.value)
        });
    }
    handleSubmit() {
        this.props.onSubmit({
            email: this.state.email,
            password: this.state.password
        })
    }
    render() {
        return(
            <>
                <input
                    type='email'
                    onChange={this.handleEmail.bind(this)}
                    />
                <input
                    type='password'
                    onChange={this.handlePW.bind(this)} />
                    />
                <input type='submit'
                    onClick={this.handleSubmit.bind(this)}
                    />
            </>
        )
    }
}