import React from 'react';

export default class MusicArtists extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <>
                {
                    this.props.list.map((artist) =>
                        <div className='artist'>
                            <div className='name'>
                                {artist.name}
                            </div>
                            {artist.showDetails && 
                                <div className='firstAlbum'>
                                    {artist.firstAlbum}
                                    </div>}
                        </div>
                    )
                }
            </>
        )
    }
}