/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import Spotify from '../../util/spotify';
import Ranking from '../Ranking/Ranking';
import Stats from '../Stats/Stats';
import { exampleSortedArtists, exampleSortedTracks } from '../../util/exampleData';

import '../../normalize.css';
import './app.css';

const App = () => {
  const [sortedArtists, setSortedArtists] = useState([]);
  const [sortedTracks, setSortedTracks] = useState([]);
  const [sortedGenres, setSortedGenres] = useState([]);
  const [timeRange, setTimeRange] = useState(0);
  const [maxLength, setMaxLength] = useState(5);
  const [ArtistItemOrder, setArtistItemOrder] = useState('descending');
  const [TrackItemOrder, setTrackItemOrder] = useState('descending');
  const [ArtistItemMode, setArtistItemMode] = useState('plays');
  const [TrackItemMode, setTrackItemMode] = useState('plays');
  const [averageArtistPopularity, setAverageArtistPopularity] = useState();
  const [averageTrackPopularity, setAverageTrackPopularity] = useState();
  const [animate, setAnimate] = useState(true);
  const [dataMessage] = useState('No data found...');

  const changeTimeRange = (e) => {
    setAnimate(true);
    switch (e.target.id) {
      case 'farTimeRange':
        setTimeRange(0);
        break;
      case 'mediumTimeRange':
        setTimeRange(1);
        break;
      case 'shortTimeRange':
        setTimeRange(2);
        break;
      default:
        setTimeRange(0);
    }
  };

  const changeMaxLength = (e) => {
    setAnimate(false);
    switch (e.target.id) {
      case 'maxLength5':
        setMaxLength(5);
        break;
      case 'maxLength10':
        setMaxLength(10);
        break;
      case 'maxLength25':
        setMaxLength(25);
        break;
      case 'maxLength50':
        setMaxLength(50);
        break;
      default:
        setMaxLength(5);
    }
  };

  const rankingSort = (e) => {
    setAnimate(false);
    let sortTarget;
    // let itemOrderSort = false;
    let sort;

    // if (e.target.classList.contains('artistsSortBtn')) {
    //   sort = [...sortedArtists];
    //   sortTarget = setSortedArtists;
    //   itemOrderSort = ArtistItemOrder === 'ascending';
    //   e.target.id === 'sortArtistsPopularityBtn'
    //     ? setArtistItemMode('popularity')
    //     : setArtistItemMode('plays');
    // } else if (e.target.classList.contains('tracksSortBtn')) {
    //   sort = [...sortedTracks];
    //   sortTarget = setSortedTracks;
    //   itemOrderSort = TrackItemOrder === 'ascending';
    //   e.target.id === 'sortTracksPopularityBtn'
    //     ? setTrackItemMode('popularity')
    //     : setTrackItemMode('plays');
    // }

    if (e.target.classList.contains('sortPlaysBtn')) {
      sort.forEach((arr) => arr.sort((a, b) => a.playsRank - b.playsRank));
    } else if (e.target.classList.contains('sortPopularityBtn')) {
      sort.forEach((arr) => arr.sort((a, b) => b.popularity - a.popularity));
    }

    // if (itemOrderSort) {
    //   sort.forEach((arr) => arr.reverse());
    // }

    sortTarget(sort);
  };

  const sortOrder = (e) => {
    // setAnimate(false);
    // const sort = [];
    // if (e.target.classList.contains('artistsSortBtn')) {
    //   sort.push([...sortedArtists]);
    //   ArtistItemOrder === 'descending'
    //     ? setArtistItemOrder('ascending')
    //     : setArtistItemOrder('descending');
    // } else if (e.target.id === 'sortTracksOrderBtn') {
    //   sort.push([...sortedTracks]);
    //   TrackItemOrder === 'descending'
    //     ? setTrackItemOrder('ascending')
    //     : setTrackItemOrder('descending');
    // } else if (e.target.id === 'loadExampleDataBtn' || 'loadSpotifyDataBtn') {
    //   if (ArtistItemOrder === 'ascending') {
    //     sort.push([...sortedArtists]);
    //     setArtistItemOrder('descending');
    //   }
    //   if (TrackItemOrder === 'ascending') {
    //     sort.push([...sortedTracks]);
    //     setTrackItemOrder('descending');
    //   }
    // }
    // sort.forEach((itemList) => itemList.forEach((arr) => arr.reverse()));
  };

  const getFavoirteGenres = () => {
    const returnedGenres = [];
    const favGenres = [];
    const artistsPopularity = [];
    const tracksPopularity = [];

    if (sortedTracks.length === 0) {
      return;
    }

    const reducer = (acc, cur) => acc + cur;

    for (let i = 0; i < sortedArtists.length; i += 1) {
      returnedGenres.push([[], []]);
      if (favGenres[i] === undefined) {
        favGenres[i] = {};
      }
      if (artistsPopularity[i] === undefined) {
        artistsPopularity[i] = [];
      }
      if (tracksPopularity[i] === undefined) {
        tracksPopularity[i] = [];
      }

      for (let j = 0; j < sortedArtists[i].length; j += 1) {
        for (let k = 0; k < sortedArtists[i][j].genresRaw.length; k += 1) {
          favGenres[i][sortedArtists[i][j].genresRaw[k]] =
            (favGenres[i][sortedArtists[i][j].genresRaw[k]] || 0) + 1;
        }
        artistsPopularity[i].push(sortedArtists[i][j].popularity);
        tracksPopularity[i].push(sortedTracks[i][j].popularity);
      }
      const sort = Object.fromEntries(Object.entries(favGenres[i]).sort(([, a], [, b]) => b - a));
      // for (const [key, value] of Object.entries(sort)) {
      //   returnedGenres[i][0].push(key);
      //   returnedGenres[i][1].push(value);
      // }
      favGenres[i] = sort;

      artistsPopularity[i] = Math.round(
        artistsPopularity[i].reduce(reducer) / artistsPopularity[i].length
      );
      tracksPopularity[i] = Math.round(
        tracksPopularity[i].reduce(reducer) / tracksPopularity[i].length
      );
      setAverageTrackPopularity(tracksPopularity);
      setAverageArtistPopularity(artistsPopularity);
    }
    setSortedGenres(returnedGenres);
  };

  const getSpotifyData = (e) => {
    const artistData = [];
    const trackData = [];
    setAnimate(true);

    Spotify.getSpotifyData().then((spotifyResponse) => {
      for (let a = 0; a < spotifyResponse.length; a += 1) {
        for (let b = 0; b < spotifyResponse[a].length; b += 1) {
          spotifyResponse[a][b].playsRank = b + 1;
        }
      }

      for (let i = 0; i < spotifyResponse.length; i += 1) {
        if (spotifyResponse[i][0].type === 'artist') {
          artistData.push(spotifyResponse[i]);
        } else if (spotifyResponse[i][0].type === 'track') {
          trackData.push(spotifyResponse[i]);
        }
      }
      sortOrder(e);
      setArtistItemOrder('descending');
      setSortedArtists(artistData);
      setSortedTracks(trackData);
    });
  };

  const getExampleData = (e) => {
    setAnimate(true);
    setSortedArtists(exampleSortedArtists);
    setSortedTracks(exampleSortedTracks);
    setArtistItemOrder('descending');
    setTrackItemOrder('descending');
    sortOrder(e);
  };

  // optimize this!
  useEffect(
    () => {
      getFavoirteGenres();
    },
    [sortedTracks],
    []
  );

  return (
    <div className="app">
      <Stats
        sortedGenres={sortedGenres}
        averageArtistPopularity={averageArtistPopularity}
        averageTrackPopularity={averageTrackPopularity}
        changeTimeRange={changeTimeRange}
        timeRange={timeRange}
        getSpotifyData={getSpotifyData}
        getExampleData={getExampleData}
        animate={animate}
        dataMessage={dataMessage}
      />
      <Ranking
        sortedGenres={sortedGenres}
        sortedArtists={sortedArtists}
        timeRange={timeRange}
        sortedTracks={sortedTracks}
        maxLength={maxLength}
        changeMaxLength={changeMaxLength}
        ArtistItemOrder={ArtistItemOrder}
        TrackItemOrder={TrackItemOrder}
        sortOrder={sortOrder}
        rankingSort={rankingSort}
        ArtistItemMode={ArtistItemMode}
        setArtistItemMode={setArtistItemMode}
        dataMessage={dataMessage}
        TrackItemMode={TrackItemMode}
      />
    </div>
  );
};

export default App;
