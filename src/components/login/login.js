import React from 'react';
import './login.css';
import Spotify from '../../util/spotify'

const Login = () => {
    return(
        <div>
            <p>beep</p>
            <button 
                className="LoginButton"
                onClick={Spotify.getTopTracks}>Fetch Spotfiy</button>
        </div>
    )
}

export default Login;