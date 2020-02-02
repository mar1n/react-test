import React from 'react';

export default function ActorsDetails(props) {
    return(
        <div>
            {
                props.actors.map(actor => 
                    
<p key={actor.name}>{actor.name} ({actor.age})</p>
                    
                    )
            }
        </div>
    )
}