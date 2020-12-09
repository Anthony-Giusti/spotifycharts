import React from 'react';
import Track from '../Track/Track';
import './Tracks.css';

const Tracks = props => {
    // console.log(props.sortedTracks);
    // console.log([props.timeRange]);
    // console.log(props.sortedTracks[[props.timeRange]])
    if (props.sortedTracks.length === 0) {
        return <p>No data loaded yet...</p>
    } else {
    return (
        <section className='tracks'>
            <div className='tracksHeader'>
                <h2>Tracks</h2>
            </div>
            <div className='trackButtons sortButtons'>
                <button 
                    id='sortTracksPlaysButton'
                    onClick={props.sortByPlays}>Sort by Most Plays</button>
                <button
                    id='sortTracksPopularity'
                    onClick={props.sortByPopularity}>Sort by Popularity</button>
            </div>
            <div>
                {
                        props.sortedTracks[props.timeRange].map(tracks => {
                            return <Track track={tracks}></Track>
                        }).splice(0, props.maxLength)
                }
            </div>
        </section>
    )
        }
}

export default Tracks;