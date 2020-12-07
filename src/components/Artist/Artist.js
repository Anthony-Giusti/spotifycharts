import React from 'react';
import './Artist.css';

const Artist = props => {
        return (
            <div className='artist'>
                <div>
                    <img className='artistPhoto' 
                        src={props.artist.images[0].url}></img>
                    <div>
                        <h3>{props.artist.name}</h3>
                        <p className='artistsGenres'></p>
                    </div>
                   
                </div>

            </div>
        )
    }

export default Artist;