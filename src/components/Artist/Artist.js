import React from 'react';
import './Artist.css';


const Artist = props => {
        return (
            <div className='artist'>
                    <div className='artistPhotoContainer'>
                    <img className='artistPhoto'
                        src={props.artist.images[0].url}></img>
                    </div> 
                    <div className='artistInfo'>
                        <h3><a href={props.artist.artistURL}>{props.artist.name}</a></h3>
                        <p className='artistGenres'>{props.artist.genres}</p>
                        <p>Spotify Followers: {props.artist.followers}</p>
                        <p>Spotify Popularity Rating: {props.artist.popularity}</p>
                    </div>
                   
                

            </div>
        )
    }

export default Artist;