import React from 'react';

export default function Actors(props) {
    return(
        <div>
            {
                props.names.map((actor) => {
                return <p key={actor}>{actor}</p>
                })
            }
        </div>
    )
}
