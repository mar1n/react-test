import React from 'react';

export default class PressMe extends React.Component {
    constructor() {
        super();
        this.state = {
            press: true
        }
    }
    render() {
        return(
            <>
                <button onClick={() => this.setState({press: !this.state.press})}>Press Me!</button>
                <label>
                    {
                        this.state.press
                        ? 'Button not pressed yet'
                        : 'Has been Pressed!'
                    }
                </label>
            </>
        )
    }
}