import React from 'react';

export default class AverageScore extends React.Component {
    constructor() {
        super();
        this.state = {
            firstScore: 78,
            secondScore: 81
        }
    }
    render() {
        return (
            <div>
                The average score is: {Math.round((this.state.firstScore + this.state.secondScore) / 2)}
            </div>
        )
    }
}