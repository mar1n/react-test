import React from 'react';

export default function Totalscore(props) {
    return (
        <div>
            The total score is: {props.scores.reduce((a, b) => a + b)}
        </div>
    )
}