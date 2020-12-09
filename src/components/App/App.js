import React, { useState } from 'react';
import Chart from 'chart.js';

import Spotify from '../../util/spotify.js' 

import Login from '../login/login';
import Ranking from '../Ranking/Ranking';
import GenreChart from '../GenreChart/GenreChart'

const App = () => {
const [sortedArtists, setSortedArtists] = useState([]);
const [sortedTracks, setSortedTracks] = useState([]);
const [sortedGenres, setSortedGenres] = useState([]);
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
        let favGenres = [];
        for (let i = 0; i < sortedArtists.length; i++){
            if (favGenres[i] === undefined){
                    favGenres[i] = {};
                }
            for (let j = 0; j < sortedArtists[i].length; j++){
                for (let k = 0; k < sortedArtists[i][j].genresRaw.length; k++){
                    favGenres[i][sortedArtists[i][j].genresRaw[k]] = 
                    (favGenres[i][sortedArtists[i][j].genresRaw[k]] || 0) + 1;
                }
            }
        }
    setSortedGenres(favGenres);
    }

    const generateGenreChart = () =>{
         let testChart = document.getElementById('genreChart');

         var genreChart = new Chart(testChart, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        return(genreChart);
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
            <GenreChart 
                sortedGenres={sortedGenres}
                generateGenreChart={generateGenreChart}
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