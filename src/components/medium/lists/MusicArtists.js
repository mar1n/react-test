import React from "react";

export default class MusicArtists extends React.Component {
  render() {
    return (
      <>
        {this.props.list.map((artist, index) => (
          <div className="artist" key={index}>
            <div className="name">{artist.name}</div>
            {artist.showDetails && (
              <div className="firstAlbum">{artist.firstAlbum}</div>
            )}
          </div>
        ))}
      </>
    );
  }
}
