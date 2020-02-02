import React from 'react';

export default class ResetPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: false
        }
        this.clickDisabled = this.clickDisabled.bind(this);
    }
    clickDisabled() {
        this.setState({ disabled: !this.state.disabled });
        setTimeout(() => this.setState({ disabled: !this.state.disabled }), 500);
    }
    render() {
        return(
            <>
                    <input
                        type="email"
                        disabled={this.state.disabled}
                    />
                    <button 
                        disabled={this.state.disabled}
                        onClick={this.clickDisabled}
                    >
                    </button>
            </>
        )
    }
}