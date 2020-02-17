import React from 'react';

export default class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            submit: false
        }
    }
    render() {
        return(
            <>
                <input
                    type="submit"
                    disabled={!this.state.disabled}
                />
            </>
        )
    }
}