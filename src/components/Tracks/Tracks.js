import React from 'react';
import Track from '../Track/Track';
import './Tracks.css';

let orderBtn = 'arrow arrow-down';

const Tracks = props => {
    const handleCLick = e => {
        if(e.target.id === 'sortTracksPlaysBtn') {
            props.rankingSort(e);
            document.getElementById(e.target.id).classList.add('btnSelected');
            document.getElementById('sortTracksPopularityBtn').classList.remove('btnSelected');
        } else if (e.target.id === 'sortTracksPopularityBtn') {
            props.rankingSort(e);
            document.getElementById(e.target.id).classList.add('btnSelected');
            document.getElementById('sortTracksPlaysBtn').classList.remove('btnSelected');
        } else if (e.target.classList.contains('tracksSortBtn')) {
            props.sortOrder(e);
        }
    }
    
    if (props.sortedTracks.length === 0) {
        return <p>No data loaded yet...</p>
    } else {

        props.TrackItemOrder === 'descending' 
                ? orderBtn = 'arrow arrow-down' 
                : orderBtn = 'arrow arrow-up';

        return (
            <section className='tracks'>
                <div className='tracksHeader'>
                    <h2>Tracks</h2>
                </div>
                <div className='trackButtons sortButtons'>
                    <button 
                        className='tracksSortBtn sortPlaysBtn btnSelected'
                        id='sortTracksPlaysBtn'
                        onClick={handleCLick}>
                            Sort by Most Plays
                    </button>
                    <button
                        className='tracksSortBtn sortPopularityBtn'
                        id='sortTracksPopularityBtn'
                        onClick={handleCLick}>
                            Sort by Popularity
                    </button>
                    <button 
                            className='tracksSortBtn sortOrderBtn'
                            id='sortTracksOrderBtn'
                            onClick={handleCLick}>
                            <span className={orderBtn}></span>      
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