import React from 'react';

export default function BuyTikets(props) {
    return(
        <div>
            {props.user.age >= 18 ? 'Enjoy the show!' : 'Sorry, try again you turn 18'} 
        </div>
    )
}