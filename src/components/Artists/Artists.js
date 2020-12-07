import React from 'react';
import Artist from '../Artist/Artist'

const Artists = props => {
    console.log(props.sortedArtists)
    if (props.sortedArtists.length === 0) {
        return <p>No data loaded yet...</p>
    } else {
        return (
            <div className='artists'>
                {
                    props.sortedArtists[props.timeRange].map(artists => {
                        return <Artist artist={artists}></Artist>
                    }).splice(0, props.maxLength)
                }
            </div>
        )
    } 
}

export default Artists;