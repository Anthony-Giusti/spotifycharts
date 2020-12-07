import React from 'react';
import './Track.css';

const Track = props => {
    return(
        <div>
            <div className='track'>
                    <div className='track'>
                        <div>
                            <img className='trackPhoto'
                                src={props.track.images[0].url}></img>
                        </div>
                        <div>
                            <h3>{props.track.name}</h3>
                            <h4>{props.track.artists[0].name}</h4>
                        </div>
                    </div>
                   

            </div>
        </div>
    )
}

export default Track;