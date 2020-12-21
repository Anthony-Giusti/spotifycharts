import React from 'react';
import './Stats.css';

import GenreChart from '../GenreChart/GenreChart';
import PopularityStats from '../PopularityStats/PopularityStats';
import TimeRange from '../TimeRange/TimeRange';

const Stats = props =>{
    return(
        <section className='statsContainer'>
            <TimeRange 
                changeTimeRange={props.changeTimeRange}
                timeRange={props.timeRange}
                getSpotifyData={props.getSpotifyData}
                getExampleData={props.getExampleData}
            />
            <GenreChart 
                sortedGenres={props.sortedGenres}
                timeRange={props.timeRange}
            />
            <PopularityStats 
                averageArtistPopularity={props.averageArtistPopularity}
                averageTrackPopularity={props.averageTrackPopularity}
                timeRange={props.timeRange}
                sortedGenres={props.sortedGenres}
                timeRange={props.timeRange}
            />
        </section>
    )
}

export default Stats;