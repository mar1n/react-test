import React from 'react';

export default function ClubTickets(props) {
    return (
        <div>
            {
            props.user.age >= 18
            ? 'Purchased!'
            : props.user.session === 'afternoon'
            ? 'Purchased!'
            : 'Sorry, not allowed'
            }
        </div>
    )
}