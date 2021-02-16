import React from 'react';
import PropTypes from 'prop-types';

import Artists from '../Artists/Artists';
import Tracks from '../Tracks/Tracks';
import './Ranking.css';

const Ranking = ({
  sortedArtists,
  timeRange,
  sortedTracks,
  maxLength,
  changeMaxLength,
  ArtistItemOrder,
  TrackItemOrder,
  sortOrder,
  rankingSort,
  ArtistItemMode,
  setArtistItemMode,
  dataMessage,
  TrackItemMode,
}) => {
  const handleCLick = (e) => {
    const buttons = document.getElementsByClassName('lengthBtn');
    Array.from(buttons).forEach((btn) => btn.classList.remove('btnSelected'));
    changeMaxLength(e);
    document.getElementById(e.target.id).classList.add('btnSelected');
  };

  return (
    <section className="rankingsContainer">
      <hr />
      <span className="rankingsHeader">
        <h2>Rankings</h2>
      </span>
      <span className="lengthBtnContainer">
        <button
          type="button"
          className="lengthBtn btnSelected"
          id="maxLength5"
          onClick={handleCLick}
        >
          Show 5 Items
        </button>
        <button type="button" className="lengthBtn" id="maxLength10" onClick={handleCLick}>
          Show 10 Items
        </button>
        <button type="button" className="lengthBtn" id="maxLength25" onClick={handleCLick}>
          Show 25 Items
        </button>
        <button type="button" className="lengthBtn" id="maxLength50" onClick={handleCLick}>
          Show 50 Items{' '}
        </button>
      </span>
      <section className="rankings">
        <Artists
          sortedArtists={sortedArtists}
          timeRange={timeRange}
          maxLength={maxLength}
          ArtistItemOrder={ArtistItemOrder}
          sortOrder={sortOrder}
          rankingSort={rankingSort}
          ArtistItemMode={ArtistItemMode}
          setArtistItemMode={setArtistItemMode}
          dataMessage={dataMessage}
        />
        <Tracks
          sortedTracks={sortedTracks}
          timeRange={timeRange}
          maxLength={maxLength}
          TrackItemOrder={TrackItemOrder}
          sortOrder={sortOrder}
          rankingSort={rankingSort}
          TrackItemMode={TrackItemMode}
          dataMessage={dataMessage}
        />
      </section>
    </section>
  );
};

Ranking.propTypes = {
  sortedArtists: PropTypes.object.isRequired,
  timeRange: PropTypes.array.isRequired,
  sortedTracks: PropTypes.object.isRequired,
  maxLength: PropTypes.number.isRequired,
  changeMaxLength: PropTypes.func.isRequired,
  ArtistItemOrder: PropTypes.string.isRequired,
  TrackItemOrder: PropTypes.string.isRequired,
  sortOrder: PropTypes.func.isRequired,
  rankingSort: PropTypes.func.isRequired,
  ArtistItemMode: PropTypes.string.isRequired,
  setArtistItemMode: PropTypes.func.isRequired,
  dataMessage: PropTypes.string.isRequired,
  TrackItemMode: PropTypes.string.isRequired,
};

export default Ranking;
