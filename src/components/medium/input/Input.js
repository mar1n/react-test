import React from 'react';

export default class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Peter'
        }
    }
    inputChange() {
        this.setState({name: 'Olivia'})
    }
    render() {
        return(
            <div>
                <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={() => this.inputChange()}
                />
            </div>
        )
    }
}