import React from 'react';
import PropTypes from 'prop-types';

import './Artist.css';

const Artist = ({ artist }) => (
  <section className="artist">
    <span className="artistPhotoContainer">
      <a href={artist.artistURL} target="_blank" rel="noreferrer">
        <img className="artistPhoto" src={artist.images[0].url} alt={artist.name} />
      </a>
    </span>
    <span className="artistInfo">
      <h3>
        <a href={artist.artistURL} target="_blank" rel="noreferrer">
          {artist.name}
        </a>
      </h3>
      <p className="artistGenres">{artist.genres}</p>
      <p>Your Play Rank: {artist.playsRank}</p>
      <p>Spotify Popularity Rating: {artist.popularity}</p>
    </span>
  </section>
);

Artist.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default Artist;
