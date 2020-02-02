import React from 'react';

export default function Welcomeuser(props) {
    if (props.lastName) {
        return <div>Welcome Mr {props.lastName}</div>
    } else {
        return <div>Welcome Mr {props.firstName}</div>
    }
} 