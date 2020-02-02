import React from 'react';

export default class Submit extends React.Component {
    constructor() {
        super();
        this.state = {
            message: 'Press to submit'
        }
        this.clickRequest = this.clickRequest.bind(this);
    }
    clickRequest() {
        this.setState({ message: 'Submitting...'});
        setTimeout(() => this.setState({ message: 'Done!'}), 1000);
    }
    render() {
        return(
            <>
        <button onClick={this.clickRequest}>
            {
                this.state.message
            }
        </button>
            </>
        )
    }
}