import React from 'react';
import PropTypes from 'prop-types';
import './Stats.css';

import GenreChart from '../GenreChart/GenreChart';
import PopularityStats from '../PopularityStats/PopularityStats';
import ControlPanel from '../ControlPanel/ControlPanel';

const Stats = ({
  sortedGenres,
  averageArtistPopularity,
  averageTrackPopularity,
  changeTimeRange,
  timeRange,
  getSpotifyData,
  getExampleData,
  animate,
  dataMessage,
}) => (
  <section className="statsContainer">
    <ControlPanel
      changeTimeRange={changeTimeRange}
      timeRange={timeRange}
      getSpotifyData={getSpotifyData}
      getExampleData={getExampleData}
      //   cancelAccessToken={cancelAccessToken}
    />
    <GenreChart
      sortedGenres={sortedGenres}
      timeRange={timeRange}
      animate={animate}
      dataMessage={dataMessage}
    />
    <PopularityStats
      averageArtistPopularity={averageArtistPopularity}
      averageTrackPopularity={averageTrackPopularity}
      timeRange={timeRange}
      sortedGenres={sortedGenres}
      dataMessage={dataMessage}
    />
  </section>
);

Stats.propTypes = {
  sortedGenres: PropTypes.object.isRequired,
  averageArtistPopularity: PropTypes.object.isRequired,
  averageTrackPopularity: PropTypes.object.isRequired,
  changeTimeRange: PropTypes.func.isRequired,
  timeRange: PropTypes.object.isRequired,
  getSpotifyData: PropTypes.func.isRequired,
  getExampleData: PropTypes.func.isRequired,
  animate: PropTypes.bool.isRequired,
  dataMessage: PropTypes.string.isRequired,
};

export default Stats;
