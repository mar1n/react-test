import React from 'react';

export default function Starting(props) {
    return (
        <div>
            {
                props.teams.reverse().map((team, index) => 
            <p className='position' key={index}>{index + 1}. {team}</p>
                    )
            }
        </div>
    )
}