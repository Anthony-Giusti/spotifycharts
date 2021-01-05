import React from 'react';
import './PopularityStats.css'

const PopularityStats = props => {
    let artistsAverage = props.dataMessage;
    let trackAverage = props.dataMessage;
    let genreRanking = props.dataMessage;

    if (typeof props.averageArtistPopularity !== 'undefined' 
    && typeof props.averageArtistPopularity[props.timeRange] !== 'undefined'){
        artistsAverage = props.averageArtistPopularity[props.timeRange];
    }

    if (typeof props.averageTrackPopularity !== 'undefined' 
    && typeof props.averageTrackPopularity[props.timeRange] !== 'undefined'){
        trackAverage = props.averageTrackPopularity[props.timeRange];
    }

    if (typeof props.sortedGenres[props.timeRange] !== 'undefined'){
        genreRanking = (
            <ol>
            {props.sortedGenres[props.timeRange][0].map(genre => {
                    return <li>{genre}</li>
                }).splice(0, 10)}
            </ol>
        );
    }

    return (
        <section className='popularityStatsContainer popularityStatsContainerFlex'>
            <section>
                <div className='artistPopularity'>
                    <h3>Average Artist Populairty:</h3>
                    <p>{artistsAverage}</p>
                </div>
                <div  className='trackPopularity'>
                    <h3>Average Track Popularity:</h3>
                    <p>{trackAverage}</p>
                </div>
            </section>
            <section className='genres'>
                <h3>Top Genres</h3>
                <div className='genreRanking'>
                    {genreRanking}
                </div>
            </section>
        </section>
    )
}

export default PopularityStats;