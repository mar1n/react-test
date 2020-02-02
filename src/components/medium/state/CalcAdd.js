import React from 'react';

export default class CalcAdd extends React.Component {
    constructor(props) {
        super(props);
        const a = 7;
        const b = 4;
        this.state = {
            a,
            b,
            total: a + b + this.props.c
        }
    }
    render() {
        return(
            <>
                The total is: {this.state.total}
            </>
        )
    }
}