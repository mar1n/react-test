import React from 'react';

export default function Analysescores(props) {
    return (
        <div>
            <div className='total'>Total: {props.scores.length}</div>
            <div className='first'>First: {props.scores[0]}</div>
            <div className='second'>Second: {props.scores[1]}</div>
        </div>
    )
}