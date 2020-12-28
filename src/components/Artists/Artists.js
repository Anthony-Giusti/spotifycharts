import React from 'react';
import Artist from '../Artist/Artist'
import './Artists.css';
import '../Ranking/Ranking.css'

const Artists = props => {
    const handleCLick = e => {
        let buttons = document.getElementsByClassName('artistsSortBtn');
        console.log(e.target.id);
        if(e.target.id === 'sortArtistsPlaysBtn') {
            props.sortByPlays(e);
        } else if (e.target.id === 'sortArtistsPopularityBtn') {
            props.sortByPopularity(e);
        }

        Array.from(buttons).forEach(btn => btn.classList.remove('btnSelected'));
        document.getElementById(e.target.id).classList.add('btnSelected');
    }


    if (props.sortedArtists.length === 0) {
        return <p>No data loaded yet...</p>
    } else {
        return (
            <section className="artists">
                <div className='artistsHeader'>
                    <h2>Artists</h2>
                </div>
                <div className='artistButtons sortButtons'>
                    <button 
                        className='artistsSortBtn btnSelected'
                        id='sortArtistsPlaysBtn'
                        onClick={handleCLick}>
                            Sort by Most Plays
                    </button>
                    <button
                        className='artistsSortBtn'
                        id='sortArtistsPopularityBtn'
                        onClick={handleCLick}>
                            Sort by Popularity
                    </button>
                </div>
                <div className='artistsRanks'>
                {
                    props.sortedArtists[props.timeRange].map(artists => {
                        return <Artist artist={artists}></Artist>
                    }).splice(0, props.maxLength)
                }
                </div>
            </section>
        )
    } 
}

export default Artists;