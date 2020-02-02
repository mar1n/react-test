import React from 'react';

export default class InputClear extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Charlotte'
        }
    }
    render() {
        return(
            <>
                <input
                    type="text"
                    value={this.state.name}
                />
                <button onClick={() => this.setState({ name: '' })}>Reset</button>
            </>
        )
    }
}