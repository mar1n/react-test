import React from 'react';

export default class InputSalary extends React.Component {
    constructor() {
        super();
        this.state = {
            salary: ''
        }
        this.changeSalary = this.changeSalary.bind(this);
    }

    changeSalary(e) {
        this.setState( {salary: e.target.value});
    }

    render() {
        return(
            <>
                <input
                    type='number'
                    value={this.state.salary}
                    onChange={(e) => this.changeSalary(e)}
                    />
                    <label>
                        {
                        this.state.salary
                        ? `Expected salary: £${this.state.salary}`
                        : ''
                        }
                    </label>
            </>
        );
    }
}