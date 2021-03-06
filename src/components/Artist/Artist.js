import React from 'react';
import './Artist.css';


const Artist = props => {
        return (
            <div className='artist'>
                    <div className='artistPhotoContainer'>
                    <a href={props.artist.artistURL} target='_blank' rel='noreferrer'>
                        <img className='artistPhoto'
                        src={props.artist.images[0].url}
                        alt={props.artist.name}></img>
                    </a>
                    </div> 
                    <div className='artistInfo'>
                        <h3><a href={props.artist.artistURL} target='_blank' rel='noreferrer'>{props.artist.name}</a></h3>
                        <p className='artistGenres'>{props.artist.genres}</p>
                        <p>Your Play Rank: {props.artist.playsRank}</p>
                        <p>Spotify Popularity Rating: {props.artist.popularity}</p>
                    </div>
            </div>
        )
    }

export default Artist;