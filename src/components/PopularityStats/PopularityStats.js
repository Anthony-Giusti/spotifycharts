import React from 'react';
import './PopularityStats.css'

const PopularityStats = props => {
    if (typeof props.averageArtistPopularity === 'undefined' || props.averageTrackPopularity === 'undefined') {
        return(
            <div className='popularityStatsContainer'>
                <div className='artistsPopularity'>
                    <h3>Average Artists Populairty:</h3>
                    <p>No data loaded yet...</p>
                </div>
                <hr></hr>
                <div>
                    <h3>Average Track Popularity:</h3>
                    <p>No data loaded yet...</p>
                </div>
                <hr></hr>
                <h3>Top Genres</h3>
            </div>
        )
    } else {
        return (
            <div className='popularityStatsContainer'>
                <div className='artistsPopularity'>
                    <h3>Average Artists Populairty:</h3>
                    <p>{props.averageArtistPopularity[props.timeRange]}</p>
                </div>
                <hr></hr>
                <div>
                    <h3>Average Track Popularity:</h3>
                    <p>{props.averageTrackPopularity[props.timeRange]}</p>
                </div>
                <hr></hr>
                <h3>Top Genres</h3>
                <div className='genreRanking'>
                    
                    <ol>
                        <li>{props.sortedGenres[props.timeRange][0][0]}</li>
                        <li>{props.sortedGenres[props.timeRange][0][1]}</li>
                        <li>{props.sortedGenres[props.timeRange][0][2]}</li>
                        <li>{props.sortedGenres[props.timeRange][0][3]}</li>
                        <li>{props.sortedGenres[props.timeRange][0][4]}</li>
                        <li>{props.sortedGenres[props.timeRange][0][5]}</li>
                        <li>{props.sortedGenres[props.timeRange][0][6]}</li>
                        <li>{props.sortedGenres[props.timeRange][0][7]}</li>
                        <li>{props.sortedGenres[props.timeRange][0][8]}</li>
                        <li>{props.sortedGenres[props.timeRange][0][9]}</li>
                    </ol>
                </div>
            </div>
        )
    }

    
}

export default PopularityStats;