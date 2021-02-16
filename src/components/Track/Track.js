import React from 'react';
import PropTypes from 'prop-types';

import './Track.css';
import '../Ranking/Ranking.css';

const Track = ({ track }) => (
  <div className="track">
    <div className="trackPhotoContainer">
      <a href={track.trackURL} target="_blank" rel="noreferrer">
        <img
          className="trackPhoto"
          src={track.images[0].url}
          alt={`Album cover for ${track.name}`}
        />
      </a>
    </div>
    <div className="trackInfo">
      <div className="trackHeaderContainer">
        <h3>
          <a href={track.trackURL} target="_blank" rel="noreferrer">
            {track.name}
          </a>{' '}
          - &nbsp;
          <a href={track.artistURL} target="_blank" rel="noreferrer">
            {track.artists[0].name}
          </a>
        </h3>
      </div>
      <div>
        <p>
          Album:{' '}
          <a href={track.albumURL} target="_blank" rel="noreferrer">
            {track.albumName}
          </a>
        </p>
        <p>Release: {track.releaseYear}</p>
        <p>Your Play Rank : {track.playsRank}</p>
        <p>Spotify Popularity Rating: {track.popularity}</p>
      </div>
    </div>
  </div>
);

Track.propTypes = {
  track: PropTypes.object.isRequired,
};

export default Track;
