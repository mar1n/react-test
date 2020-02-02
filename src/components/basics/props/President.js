import React from  'react';

export default function President({firstName, lastName}) {
    return(
        <div>
            <div className='firstName'>First name: {firstName}</div>
            <div className='lastName'>Last name: {lastName}</div>
        </div>
    )
}