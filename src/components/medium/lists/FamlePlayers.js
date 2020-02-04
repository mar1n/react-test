import React from 'react';

export default class FamlePlayers extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <>
                {
                    this.props.list
                        .filter( player => player.gender === 'F')
                        .map(player => player.name)
                        .sort()
                        .map(name => <p key={name}>{name}</p>)
                }
            </>
        )
    }
}