import React from 'react';

export default function UserDetails(props) {
    return (
        <div>
            {
                Object.keys(props.user).map(user =>
                    <p key={user} className='details'>{user}: {props.user[user]}</p>
                )
            }
        </div>
    );
}