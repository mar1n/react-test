import React from 'react';

export default function Checkbox(props) {
    return(
        <div>
            <input className='terms' type='checkbox' value={props.terms} />
            <input className='news' type='checkbox' value={props.news} />
        </div>
    )
}