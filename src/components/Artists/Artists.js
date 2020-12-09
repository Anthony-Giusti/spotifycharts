import React from 'react';
import Artist from '../Artist/Artist'
import './Artists.css';
import '../Ranking/Ranking.css'

const Artists = props => {
    if (props.sortedArtists.length === 0) {
        return <p>No data loaded yet...</p>
    } else {
        return (
            <section className="artists">
                <div className='artistHeader'>
                    <h2>Artists</h2>
                </div>
                <div className='artistButtons sortButtons'>
                    <button 
                        id="sortArtistsPlaysButton"
                        onClick={props.sortByPlays}
                        >Sort by Most Plays</button>
                    <button
                        id='sortArtistsPopularity'
                        onClick={props.sortByPopularity}>Sort by Popularity</button>
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