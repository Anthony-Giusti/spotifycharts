import React, { useState } from 'react';
// import { cloneDeep } from 'lodash';

import Spotify from '../../util/spotify.js' 

import Login from '../login/login';
import Ranking from '../Ranking/Ranking';

const App = () => {
const [sortedArtists, setSortedArtists] = useState([]);
const [sortedTracks, setSortedTracks] = useState([]);
const [timeRange, setTimeRange] = useState(0);
const [maxLength, setMaxLength] = useState(5);

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
        // sort.map( x => x.slice(0, 10));   
        setSortedArtists(sort);
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
            <Ranking
                sortedArtists={sortedArtists}
                timeRange={timeRange}
                sortedTracks={sortedTracks}
                maxLength={maxLength}
               />
        </div>
    )
}

export default App;