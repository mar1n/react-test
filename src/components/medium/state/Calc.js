import React from 'react';

export default class Calc extends React.Component {
    constructor() {
        super();
        this.state = {
            a: 7,
            b: 4
        };
    }
    render() {
        return (
            <>
                {
                    this.props.operation === 'add'
                        ? `The result is: ` + (this.state.a + this.state.b)
                        : this.props.operation === 'subtract'
                            ? `The result is: ` + (this.state.a - this.state.b)
                            : `This operation is not supported yet!`
                }
            </>
        )
    }
}