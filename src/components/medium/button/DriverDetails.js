import React from 'react';

export default class DriverDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    render() {
        return(
            <>
            <button onClick={() => this.setState({ show: !this.state.show})}>Toggle driver details</button>
                {
                    this.state.show && <label className='details'>Races: 314, Titles: 2, Poles: 22</label>
                }
            </>
        )
    }
}