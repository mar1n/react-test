import React from 'react';

export default function TextUser(props) {
    return(
        <div>
            <input type='text' value={props.value} placeholder={props.placeholder} />
        </div>
    )
}