import React from 'react';
import PropTypes from 'prop-types';
import './ControlPanel.css';

const ControlPanel = ({ changeTimeRange, getSpotifyData, getExampleData }) => {
  const handleCLick = (e) => {
    const buttons = document.getElementsByClassName('timeRangeBtn');

    changeTimeRange(e);

    Array.from(buttons).forEach((btn) => btn.classList.remove('btnSelected'));
    document.getElementById(e.target.id).classList.add('btnSelected');
  };

  const darkModeToggle = () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  };

  return (
    <section className="btnContainer">
      <button type="button" className="dataBtn" id="loadSpotifyDataBtn" onClick={getSpotifyData}>
        Fetch Spotfiy Data
      </button>
      <div className="timeRangeBtnContainer">
        <h4>Time Ranges</h4>
        <button
          type="button"
          className="timeRangeBtn btnSelected"
          id="farTimeRange"
          onClick={handleCLick}
        >
          One Year
        </button>
        <button type="button" className="timeRangeBtn" id="mediumTimeRange" onClick={handleCLick}>
          Six Months
        </button>
        <button type="button" className="timeRangeBtn" id="shortTimeRange" onClick={handleCLick}>
          One Month
        </button>
      </div>
      <div className="info">
        <p>
          This app will use the Spotify data display information about your listening habits. This
          will only account for your top 50 most played artists and tracks in each given time range.
          This app will be more effective with using a frequently used acccount. To see an example
          of this looks like with a frequently used account click the example button.
        </p>
      </div>
      <button type="button" className="dataBtn" id="loadExampleDataBtn" onClick={getExampleData}>
        Load Example Data
      </button>
      <div className="switch">
        <input id="theme-toggle" type="checkbox" />
        {/* <label htmlFor="theme-toggle" onClick={darkModeToggle} /> */}
        {/* <label htmlFor="theme-toggle" onClick={darkModeToggle} /> */}
        &nbsp; Toggle Theme
      </div>
    </section>
  );
};

ControlPanel.propTypes = {
  changeTimeRange: PropTypes.func.isRequired,
  getSpotifyData: PropTypes.func.isRequired,
  getExampleData: PropTypes.func.isRequired,
};

export default ControlPanel;
