import React, { useEffect, useRef } from 'react';
import Artist from '../Artist/Artist'
import './Artists.css';

let orderBtn = 'arrow arrow-down';
let artistMap = <p>No data available...</p>;

const Artists = props => {

    if (typeof props.sortedArtists[props.timeRange] !== 'undefined') {
        if (props.ArtistItemMode === 'plays'){
            document.getElementById('sortArtistsPlaysBtn').classList.add('btnSelected');
            document.getElementById('sortArtistsPopularityBtn').classList.remove('btnSelected');
        } else if (props.ArtistItemMode === 'popularity'){
            document.getElementById('sortArtistsPopularityBtn').classList.add('btnSelected');
            document.getElementById('sortArtistsPlaysBtn').classList.remove('btnSelected');
        }

        artistMap = props.sortedArtists[props.timeRange].map(artists => {
            return <Artist artist={artists}></Artist>
            }).splice(0, props.maxLength);
        
    }

    const handleCLick = e => {
        if(e.target.id === 'sortArtistsPlaysBtn') {
            props.rankingSort(e);
        } else if (e.target.id === 'sortArtistsPopularityBtn') {
            props.rankingSort(e);
        } else if (e.target.classList.contains('artistsSortBtn')) {
            props.sortOrder(e);
        }
    }

        props.ArtistItemOrder === 'descending' 
                ? orderBtn = 'arrow arrow-down' 
                : orderBtn = 'arrow arrow-up';

        return (
            <section className="artists">
                <div className='artistsHeader'>
                    <h2>Artists</h2>
                </div>
                <div className='artistButtons sortButtons'>
                    <button 
                        className='artistsSortBtn sortPlaysBtn btnSelected'
                        id='sortArtistsPlaysBtn'
                        onClick={handleCLick}>
                            Sort by Most Plays
                    </button>
                    <button
                        className='artistsSortBtn sortPopularityBtn'
                        id='sortArtistsPopularityBtn'
                        onClick={handleCLick}>
                            Sort by Popularity
                    </button>
                    <button 
                        className='artistsSortBtn sortOrderBtn'
                        id='sortArtistsOrderBtn'
                        onClick={handleCLick}>
                            <span className={orderBtn}></span>
                        </button>
                </div>
                <div className='artistsRanks'>
                    {artistMap}
                {/* {
                    props.sortedArtists[props.timeRange].map(artists => {
                        return <Artist artist={artists}></Artist>
                    }).splice(0, props.maxLength)
                } */}
                </div>
            </section>
        )
    } 

export default Artists;