import React from 'react';
import PropTypes from 'prop-types';

import Track from '../Track/Track';
import './Tracks.css';

let orderBtn = 'arrow arrow-down';
let tracksMap = <p>No data available...</p>;

const Tracks = ({
  sortedTracks,
  timeRange,
  maxLength,
  sortOrder,
  rankingSort,
  TrackItemMode,
  dataMessage,
}) => {
  const handleCLick = (e) => {
    if (e.target.id === 'sortTracksPlaysBtn') {
      rankingSort(e);
    } else if (e.target.id === 'sortTracksPopularityBtn') {
      rankingSort(e);
    } else if (e.target.classList.contains('tracksSortBtn')) {
      sortOrder(e);
    }
  };

  if (typeof sortedTracks[timeRange] !== 'undefined') {
    if (TrackItemMode === 'plays') {
      document.getElementById('sortTracksPlaysBtn').classList.add('btnSelected');
      document.getElementById('sortTracksPopularityBtn').classList.remove('btnSelected');
    } else if (TrackItemMode === 'popularity') {
      document.getElementById('sortTracksPopularityBtn').classList.add('btnSelected');
      document.getElementById('sortTracksPlaysBtn').classList.remove('btnSelected');
    }

    tracksMap = sortedTracks[timeRange]
      .map((track) => <Track track={track} key={track.playsRank} />)
      .splice(0, maxLength);
  } else {
    tracksMap = <p>{dataMessage}</p>;
  }

  props.TrackItemOrder === 'descending'
    ? (orderBtn = 'arrow arrow-down')
    : (orderBtn = 'arrow arrow-up');

  return (
    <section className="tracks">
      <div className="tracksHeader">
        <h2>Tracks</h2>
      </div>
      <div className="trackButtons sortButtons">
        <button
          type="button"
          className="tracksSortBtn sortPlaysBtn btnSelected"
          id="sortTracksPlaysBtn"
          onClick={handleCLick}
        >
          Sort by Most Plays
        </button>
        <button
          type="button"
          className="tracksSortBtn sortPopularityBtn"
          id="sortTracksPopularityBtn"
          onClick={handleCLick}
        >
          Sort by Popularity
        </button>
        <button
          type="button"
          className="tracksSortBtn sortOrderBtn"
          id="sortTracksOrderBtn"
          onClick={handleCLick}
        >
          <span className={orderBtn} />
        </button>
      </div>
      <div>{tracksMap}</div>
    </section>
  );
};

Tracks.propTypes = {
  sortedTracks: PropTypes.object.isRequired,
  timeRange: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
  TrackItemOrder: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired,
  rankingSort: PropTypes.string.isRequired,
  TrackItemMode: PropTypes.string.isRequired,
  dataMessage: PropTypes.string.isRequired,
};

export default Tracks;
