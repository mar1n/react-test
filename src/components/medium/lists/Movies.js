import React from 'react';

export default class Movies extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                {this.props.list.map((movie) => {
                    return <p key={movie.title}>{movie.title} ({movie.year}), directed by {movie.director}</p>
                })}
            </>
        )
    }
}