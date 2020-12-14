import React, { useState } from 'react';

import Spotify from '../../util/spotify.js' 

import Login from '../login/login';
import Ranking from '../Ranking/Ranking';
import Stats from '../Stats/Stats';

const App = () => {
const [sortedArtists, setSortedArtists] = useState([]);
const [sortedTracks, setSortedTracks] = useState([]);
const [sortedGenres, setSortedGenres] = useState([]);
const [timeRange, setTimeRange] = useState(0);
const [maxLength, setMaxLength] = useState(5);
const [averageArtistPopularity, setAverageArtistPopularity] = useState();
const [averageTrackPopularity, setAverageTrackPopularity] = useState()

    const changeTimeRange = e => {
        switch (e.target.id){
            case 'farTimeRange' :
                setTimeRange(0);
                break;
            case 'mediumTimeRange' :
                setTimeRange(1);
                break;
            case 'shortTimeRange' :
                setTimeRange(2);
                break;
            default :
                setTimeRange(0);
        }
    }

    const changeMaxLength = e => {
        console.log(e.target.id);
        switch (e.target.id){
            case 'maxLength5' :
                setMaxLength(5);
                break;
            case 'maxLength10' :
                setMaxLength(10);
                break;
            case 'maxLength25' :
                setMaxLength(25);
                break;
            case 'maxLength50' :
                setMaxLength(50);
                break;
            default :
                setMaxLength(5);
        }
    }

    const sortByPopularity = e => {
        let sortTarget;
        let sort = [];
        if (e.target.id === 'sortArtistsPopularity') {
            sort = [...sortedArtists];
            sortTarget = setSortedArtists;
        } else if (e.target.id === 'sortTracksPopularity'){
            sort = [...sortedTracks];
            sortTarget = setSortedTracks;
        } else {
            return;
        }
        for (let i = 0; i < sort.length; i++){
            sort[i].sort((a, b) => b.popularity - a.popularity);
            }
        sortTarget(sort);
    }

    const sortByPlays = e => {
        let sortTarget;
        let sort = [];
        if (e.target.id === 'sortArtistsPlaysButton'){
            sort = [...sortedArtists];
            sortTarget = setSortedArtists;
        } else if (e.target.id === 'sortTracksPlaysButton'){
            sort = [...sortedTracks];
            sortTarget = setSortedTracks;
        } else {
            return;
        }
        for (let i = 0; i < sort.length; i++){
            sort[i].sort((a, b) => a.rank - b.rank);
            }  
        sortTarget(sort);
    }

    const getFavoirteGenres = () => {
        let returnedGenres = [];
        let favGenres = [];
        let artistsPopularity = [];
        let tracksPopularity = [];
        const reducer = (acc, cur) => acc + cur;

        for (let i = 0; i < sortedArtists.length; i++){
            returnedGenres.push([[],[]]);
            if (favGenres[i] === undefined){
                    favGenres[i] = {};
                }
            if (artistsPopularity[i] === undefined) {
                artistsPopularity[i] = [];
            }
            if (tracksPopularity[i] === undefined) {
                tracksPopularity[i] = [];
            }

            for (let j = 0; j < sortedArtists[i].length; j++){
                for (let k = 0; k < sortedArtists[i][j].genresRaw.length; k++){
                    favGenres[i][sortedArtists[i][j].genresRaw[k]] = 
                    (favGenres[i][sortedArtists[i][j].genresRaw[k]] || 0) + 1;
                }
                artistsPopularity[i].push(sortedArtists[i][j].popularity);
                tracksPopularity[i].push(sortedTracks[i][j].popularity);
            }
            let sort = Object.fromEntries(Object.entries
                (favGenres[i]).sort(([,a],[,b]) => b-a));
            for (const [key, value] of Object.entries(sort)){
                returnedGenres[i][0].push(key);
                returnedGenres[i][1].push(value);
            }
            favGenres[i] = sort;  
            
            artistsPopularity[i] = artistsPopularity[i].reduce(reducer) / artistsPopularity[i].length;
            tracksPopularity[i] = tracksPopularity[i].reduce(reducer) / tracksPopularity[i].length;
            console.log(tracksPopularity);
            console.log(artistsPopularity);
            
        }
        setSortedGenres(returnedGenres);
    }

    const getPopularityStats = () => {
        const reducer = (acc, cur) => acc + cur;
        console.log(sortedArtists[timeRange]);
        // setAverageArtistPopularity(sortedArtists[timeRange].reduce(reducer) / sortedArtists[timeRange]);
    }

    const getSpotifyData = () => {
        Spotify.getTopTracks().then(spotifyResponse => {
            for (let a = 0; a < spotifyResponse.length; a++){
                for (let b = 0; b < spotifyResponse[a].length; b++){
                    spotifyResponse[a][b].rank = b + 1;
                }
            }
            setSortedArtists(spotifyResponse.splice(0, 3));
            setSortedTracks(spotifyResponse);
            getFavoirteGenres();
            // getPopularityStats();
            });
    }

    return (
        <div>
            <Login 
                sortedArtists={sortedArtists}
                getSpotifyData={getSpotifyData}
                sortByPlays={sortByPlays}
                sortByPopularity={sortByPopularity}
                changeTimeRange={changeTimeRange}
                timeRange={timeRange}
                changeMaxLength={changeMaxLength}/>
            <Stats 
                sortedGenres={sortedGenres}
                timeRange={timeRange}
                averageArtistPopularity={averageArtistPopularity}
                />
            <Ranking
                sortedGenres={sortedGenres}
                sortByPlays={sortByPlays}
                sortByPopularity={sortByPopularity}
                sortedArtists={sortedArtists}
                timeRange={timeRange}
                sortedTracks={sortedTracks}
                maxLength={maxLength}/>
        </div>
    )
}

export default App;