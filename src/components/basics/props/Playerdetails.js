import React from 'react';

export default function Playerdetails(props) {
    const { name, score } = props.person;
    return(
        <div>
            <div className='name'>Name: {name}</div>
            <div className='score'>Score: {score}</div>
        </div>
    )
}