import React from 'react';
import Artists from '../Artists/Artists';
import Tracks from '../Tracks/Tracks';
import './Ranking.css';


const Ranking = props => {
    console.log(props.sortedArtists);
    return (
        <div className='rankings'>
            <h3 >Most Played Artists Ranking</h3>
            <Artists
                sortedArtists={props.sortedArtists}
                timeRange={props.timeRange}
                maxLength={props.maxLength}
                />
            <Tracks 
                sortedTracks={props.sortedTracks}
                timeRange={props.timeRange}
                maxLength={props.maxLength}/>
        </div>
    )
}

export default Ranking;