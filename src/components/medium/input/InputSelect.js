import React from 'react';

export default class InputSelect extends React.Component {
    constructor() {
        super();
        this.state = {
            fruit: 'Apple'
        }
        this.changeFruit = this.changeFruit.bind(this);
    }
    changeFruit(e) {
        this.setState({ fruit: e.target.value });
    }
    render() {
        return(
            <>
                <select 
                    value={this.state.fruit}
                    onChange={e => this.changeFruit(e)}
                >
                    <option value='Apple'>Apple</option>
                    <option value='Orange'>Orange</option>
                </select>
            </>
        )
    }
}