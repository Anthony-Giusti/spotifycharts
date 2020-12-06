import React from 'react';
import './login.css';

const Login = props => {
    
    return(
        <div>
            <div>
                <button
                    id='farTimeRange'
                    onClick={props.changeTimeRange}>
                        One Year
                </button>
                <button
                    id='mediumTimeRange'
                    onClick={props.changeTimeRange}>
                    Six Months
                </button>
                <button
                    id='shortTimeRange'
                    onClick={props.changeTimeRange}>
                    One Month
                </button>
            </div>
            <div>
            <button 
                className="LoginButton"
                onClick={props.getSpotifyData}
                >Fetch Spotfiy</button>
            <button
                onClick={props.sortByPopularity}
                >Sort By Popularity</button>
            <button 
                onClick={props.sortByPlays}
                >Sort By Most Plays</button>
            </div>
        </div>
    )
}

export default Login;