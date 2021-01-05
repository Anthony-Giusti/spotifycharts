import React from 'react';
import './Stats.css';

import GenreChart from '../GenreChart/GenreChart';
import PopularityStats from '../PopularityStats/PopularityStats';
import ControlPanel from '../ControlPanel/ControlPanel';

const Stats = props =>{
    return(
        <section className='statsContainer'>
            <ControlPanel 
                changeTimeRange={props.changeTimeRange}
                timeRange={props.timeRange}
                getSpotifyData={props.getSpotifyData}
                getExampleData={props.getExampleData}
                cancelAccessToken={props.cancelAccessToken}
            />
            <GenreChart 
                sortedGenres={props.sortedGenres}
                timeRange={props.timeRange}
                animate={props.animate}
                dataMessage={props.dataMessage}
            />
            <PopularityStats 
                averageArtistPopularity={props.averageArtistPopularity}
                averageTrackPopularity={props.averageTrackPopularity}
                timeRange={props.timeRange}
                sortedGenres={props.sortedGenres}
                dataMessage={props.dataMessage}
            />
        </section>
    )
}

export default Stats;