import React from 'react';
import PropTypes from 'prop-types';

import Artist from '../Artist/Artist';
import './Artists.css';

let orderBtn = 'arrow arrow-down';
let artistMap = <p>No data available...</p>;

const Artists = ({
  sortedArtists,
  timeRange,
  maxLength,
  sortOrder,
  rankingSort,
  ArtistItemMode,
  dataMessage,
}) => {
  const handleCLick = (e) => {
    if (e.target.id === 'sortArtistsPlaysBtn') {
      rankingSort(e);
    } else if (e.target.id === 'sortArtistsPopularityBtn') {
      rankingSort(e);
    } else if (e.target.classList.contains('artistsSortBtn')) {
      sortOrder(e);
    }
  };

  if (typeof sortedArtists[timeRange] !== 'undefined') {
    if (ArtistItemMode === 'plays') {
      document.getElementById('sortArtistsPlaysBtn').classList.add('btnSelected');
      document.getElementById('sortArtistsPopularityBtn').classList.remove('btnSelected');
    } else if (ArtistItemMode === 'popularity') {
      document.getElementById('sortArtistsPopularityBtn').classList.add('btnSelected');
      document.getElementById('sortArtistsPlaysBtn').classList.remove('btnSelected');
    }

    artistMap = sortedArtists[timeRange]
      .map((artist) => <Artist artist={artist} key={artist.playsRank} />)
      .splice(0, maxLength);
  } else {
    artistMap = <p>{dataMessage}</p>;
  }

  props.ArtistItemOrder === 'descending'
    ? (orderBtn = 'arrow arrow-down')
    : (orderBtn = 'arrow arrow-up');

  return (
    <section className="artists">
      <div className="artistsHeader">
        <h2>Artists</h2>
      </div>
      <div className="artistButtons sortButtons">
        <button
          type="button"
          className="artistsSortBtn sortPlaysBtn btnSelected"
          id="sortArtistsPlaysBtn"
          onClick={handleCLick}
        >
          Sort by Most Plays
        </button>
        <button
          type="button"
          className="artistsSortBtn sortPopularityBtn"
          id="sortArtistsPopularityBtn"
          onClick={handleCLick}
        >
          Sort by Popularity
        </button>
        <button
          type="button"
          className="artistsSortBtn sortOrderBtn"
          id="sortArtistsOrderBtn"
          onClick={handleCLick}
        >
          <span className={orderBtn} />
        </button>
      </div>
      <div className="artistsRanks">{artistMap}</div>
    </section>
  );
};

Artists.propTypes = {
  sortedArtists: PropTypes.object.isRequired,
  timeRange: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
  ArtistItemOrder: PropTypes.func.isRequired,
  sortOrder: PropTypes.func.isRequired,
  rankingSort: PropTypes.func.isRequired,
  ArtistItemMode: PropTypes.string.isRequired,
  dataMessage: PropTypes.string.isRequired,
};

export default Artists;
