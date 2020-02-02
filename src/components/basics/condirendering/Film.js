import React from 'react';

export default function Film(props) {
    return(
        <div>
            {
            props.score < 50 
            ? 'Poor'
            : props.score < 75
            ? 'Nice'
            : 'Excellent'
            }
        </div>
    )
}