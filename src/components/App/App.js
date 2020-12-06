import React, { useState } from 'react';

import Spotify from '../../util/spotify.js' 

import Login from '../login/login';
import Ranking from '../Ranking/Ranking';

const App = () => {
const [sortedArtists, setSortedArtists] = useState([]);
const [sortedSongs, setSortedSongs] = useState([]);
const [timeRange, setTimeRange] = useState(0);
const [maxLength, setMaxLength] = useState(10);

    const changeTimeRange = timeRange => {
        switch (timeRange){
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

    const sortByPopularity = () => {
        let sort = [...sortedArtists];
        for (let i = 0; i < sort.length; i++){
            sort[i].sort((a, b) => b.popularity - a.popularity);
            }
        setSortedArtists(sort);
    }

    const sortByPlays = () =>{
        let sort = [...sortedArtists];
        for (let i = 0; i < sort.length; i++){
            sort[i].sort((a, b) => a.rank - b.rank);
            }
        setSortedArtists(sort);
    }

    const getSpotifyData = () => {
        Spotify.getTopTracks().then(spotifyResponse => {
            for (let a = 0; a < spotifyResponse.length; a++){
                for (let b = 0; b < spotifyResponse[a].length; b++){
                    spotifyResponse[a][b].rank = b + 1;
                }
            }
            setSortedArtists(spotifyResponse);
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
                timeRange={timeRange}/>
            <Ranking
                sortedArtists={sortedArtists}
                timeRange={timeRange}
               />
        </div>
    )
}

export default App;