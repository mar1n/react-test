import React from 'react';

export default function WordOfMouth({ message }) {
    return <FriendA message={message} />;
}

export function FriendA(props) {
    return (
        <div>
            <FriendB message={
                props.message.slice(0, props.message.length -1) + '!'}
            />
        </div>
    )
}

export function FriendB(props) {
    return(
        <div>
            <FriendC message={
                props.message.slice(0, props.message.length -1) + ' on the 7th'}
            />
        </div>
    );
}

export function FriendC(props) {
    return (<div></div>);
}

