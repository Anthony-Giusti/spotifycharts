import React from 'react';
import './Track.css';
import '../Ranking/Ranking.css'

const Track = props => {

    return(
            <div className='track'>
                <div className='trackPhotoContainer'>
                    <img className='trackPhoto'
                        src={props.track.images[0].url}></img>
                </div>
                <div className='trackInfo'>
                    <div>
                        <h3><a href={props.track.trackURL}>{props.track.name}</a></h3>
                        <h4>{props.track.artists[0].name}</h4>
                    </div>
                    <div>
                        <p>Album: <a href={props.track.albumURL}>{props.track.albumName}</a></p>
                        <p>Release: {props.track.releaseYear}</p>
                        <p>Spotify Popularity Rating: {props.track.popularity}</p>
                    </div>
                    <div>
                        {/* <figure>
                        <audio
                            controls 
                            src={props.track.previewURL}></audio>
                    </figure> */}
                    </div>
                    
                </div>
            </div>
    )
}

export default Track;