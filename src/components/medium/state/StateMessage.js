import React from 'react';

export default class StateMessage extends React.Component {
    constructor() {
		super();
		this.state = { message: 'Hello!'};
    }
    render() {
        return(
            <div>
                {this.state.message}
            </div>
        )
    }
}
