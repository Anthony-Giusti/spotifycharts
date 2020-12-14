import React from 'react';
import Artists from '../Artists/Artists';
import Tracks from '../Tracks/Tracks';
import './Ranking.css';


const Ranking = props => {
    return (
        <div><h2>Ranks</h2>
        <div className='rankings'>
            <Artists
                sortByPlays={props.sortByPlays}
                sortByPopularity={props.sortByPopularity}
                sortedArtists={props.sortedArtists}
                timeRange={props.timeRange}
                maxLength={props.maxLength}
                />
            <Tracks 
                sortByPlays={props.sortByPlays}
                sortByPopularity={props.sortByPopularity}
                sortedTracks={props.sortedTracks}
                timeRange={props.timeRange}
                maxLength={props.maxLength}/>
        </div>
        </div>
    )
}

export default Ranking;