import React from 'react';
import Track from '../Track/Track';
import './Tracks.css';

const Tracks = props => {
    const handleCLick = e => {
        let buttons = document.getElementsByClassName('trackSortBtn');
        if(e.target.id === 'sortTracksPlaysBtn') {
            props.sortByPlays(e);
        } else if (e.target.id === 'sortTracksPopularityBtn') {
            props.sortByPopularity(e);
        }

        Array.from(buttons).forEach(btn => btn.classList.remove('btnSelected'));
        document.getElementById(e.target.id).classList.add('btnSelected');
    }
    
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
                    className='trackSortBtn btnSelected'
                    id='sortTracksPlaysBtn'
                    onClick={handleCLick}>
                        Sort by Most Plays
                </button>
                <button
                    className='trackSortBtn'
                    id='sortTracksPopularityBtn'
                    onClick={handleCLick}>
                        Sort by Popularity
                </button>
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