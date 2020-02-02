import React from 'react';

export default function Textarea(props) {
    return (
        <div>
        <textarea value={props.value} placeholder={props.placeholder}> </textarea>
    </div>
    )
}