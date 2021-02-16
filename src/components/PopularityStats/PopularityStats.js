import React from 'react';
import './PopularityStats.css';
import PropTypes from 'prop-types';

const PopularityStats = ({
  averageArtistPopularity,
  averageTrackPopularity,
  timeRange,
  sortedGenres,
  dataMessage,
}) => {
  let artistsAverage = dataMessage;
  let trackAverage = dataMessage;
  let genreRanking = dataMessage;

  if (
    typeof averageArtistPopularity !== 'undefined' &&
    typeof averageArtistPopularity[timeRange] !== 'undefined'
  ) {
    artistsAverage = averageArtistPopularity[timeRange];
  }

  if (
    typeof averageTrackPopularity !== 'undefined' &&
    typeof averageTrackPopularity[timeRange] !== 'undefined'
  ) {
    trackAverage = averageTrackPopularity[timeRange];
  }

  if (typeof sortedGenres[timeRange] !== 'undefined') {
    genreRanking = (
      <ol>{sortedGenres[timeRange][0].map((genre) => <li>{genre}</li>).splice(0, 10)}</ol>
    );
  }

  return (
    <section className="popularityStatsContainer popularityStatsContainerFlex">
      <section>
        <div className="artistPopularity">
          <h3>Average Artist Populairty:</h3>
          <p>{artistsAverage}</p>
        </div>
        <div className="trackPopularity">
          <h3>Average Track Popularity:</h3>
          <p>{trackAverage}</p>
        </div>
      </section>
      <section className="genres">
        <h3>Top Genres</h3>
        <div className="genreRanking">{genreRanking}</div>
      </section>
    </section>
  );
};

PopularityStats.propTypes = {
  averageArtistPopularity: PropTypes.object.isRequired,
  averageTrackPopularity: PropTypes.object.isRequired,
  timeRange: PropTypes.array.isRequired,
  sortedGenres: PropTypes.object.isRequired,
  dataMessage: PropTypes.string.isRequired,
};

export default PopularityStats;
