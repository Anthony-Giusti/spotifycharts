import React from 'react';
import Artist from '../Artist/Artist';

const Ranking = props => {
    return (
        <div>
            <h3>Most Played Artists Ranking</h3>
            <Artist 
                sortedArtists={props.sortedArtists}
                timeRange={props.timeRange}
                />
        </div>
    )
}

export default Ranking;