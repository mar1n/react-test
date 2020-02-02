import React from 'react';

export default function User(props) {
    return(
        <div>
<div className='userName'>My name is {props.user}</div>
        </div>
    );
}