import React from 'react';
import './Track.css';
import '../Ranking/Ranking.css'

const Track = props => {

    return(
            <div className='track'>
                <div className='trackPhotoContainer'>
                    <a 
                        href={props.track.trackURL} 
                        target='_blank'>
                            <img 
                                className='trackPhoto'
                                src={props.track.images[0].url}>
                            </img>
                    </a>
                </div>
                <div className='trackInfo'>
                    <div>
                        <h3>
                            <a 
                                href={props.track.trackURL}
                                target='_blank'>{props.track.name}
                            </a>
                        </h3>
                        <h4><a
                            href={props.track.artistURL}
                            target='_blank'>
                                {props.track.artists[0].name}
                            </a>
                        </h4>
                    </div>
                    <div>
                        <p>Album: <a 
                            href={props.track.albumURL} 
                            target='_blank'>{props.track.albumName}
                            </a>
                        </p>
                        {/* <p>Release: {props.track.releaseYear}</p> */}
                        <p>Your Play Rank : {props.track.playsRank}</p>
                        <p>Spotify Popularity Rating: {props.track.popularity}</p>
                    </div> 
                </div>
            </div>
    )
}

export default Track;