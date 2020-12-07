import React from 'react';
import Track from '../Track/Track';

const Tracks = props => {
    console.log(props.sortedTracks);
    console.log([props.timeRange]);
    console.log(props.sortedTracks[[props.timeRange]])
    if (props.sortedTracks.length === 0) {
        return <p>No data loaded yet...</p>
    } else {
    return (
        <div>
            {
                    props.sortedTracks[props.timeRange].map(tracks => {
                        return <Track track={tracks}></Track>
                    }).splice(0, props.maxLength)
            }
        </div>
    )
        }
}

export default Tracks;