import React from 'react';
import './Artist.css';


const Artist = props => {
        return (
            // <a href={props.artist.artistURL} target='_blank'>
            <div className='artist'>
                    <div className='artistPhotoContainer'>
                    <a href={props.artist.artistURL} target='_blank'>
                        <img className='artistPhoto'
                        src={props.artist.images[0].url}></img>
                    </a>
                    </div> 
                    <div className='artistInfo'>
                        <h3><a href={props.artist.artistURL} target='_blank'>{props.artist.name}</a></h3>
                        <p className='artistGenres'>{props.artist.genres}</p>
                        <p>Spotify Followers: {props.artist.followers}</p>
                        <p>Spotify Popularity Rating: {props.artist.popularity}</p>
                    </div>
            </div>
            // </a>
        )
    }

export default Artist;