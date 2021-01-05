import React from 'react';
import Track from '../Track/Track';
import './Tracks.css';

let orderBtn = 'arrow arrow-down';
let tracksMap = <p>No data available...</p>

const Tracks = props => {
    const handleCLick = e => {
        if(e.target.id === 'sortTracksPlaysBtn') {
            props.rankingSort(e);
        } else if (e.target.id === 'sortTracksPopularityBtn') {
            props.rankingSort(e);
        } else if (e.target.classList.contains('tracksSortBtn')) {
            props.sortOrder(e);
        }
    }

    if (typeof props.sortedTracks[props.timeRange] !== 'undefined') {
        if (props.TrackItemMode === 'plays'){
            document.getElementById('sortTracksPlaysBtn').classList.add('btnSelected');
            document.getElementById('sortTracksPopularityBtn').classList.remove('btnSelected');
        } else if (props.TrackItemMode === 'popularity'){
            document.getElementById('sortTracksPopularityBtn').classList.add('btnSelected');
            document.getElementById('sortTracksPlaysBtn').classList.remove('btnSelected');
        }

        tracksMap = props.sortedTracks[props.timeRange].map(track => {
            return <Track track={track} key={track.playsRank}></Track>
        }).splice(0, props.maxLength);
        
    }  else {
        tracksMap = <p>{props.dataMessage}</p>
    }

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
                    {tracksMap}
                </div>
            </section>
        )
    }

export default Tracks;