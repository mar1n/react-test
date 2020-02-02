import React from 'react';

export default function ChallengeResults(props) {
    function getAverage() {
        return props.scores.reduce((a, b) => {
            return a + b /props.scores.length;
        }, 0);
    }

    return (
        <div>
            {getAverage() >= 50 === true ? 'Well done!' : 'Keep training!'}
        </div>
    )
}