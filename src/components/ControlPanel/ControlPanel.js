import React from 'react';
import './ControlPanel.css';

const ControlPanel = props => {
    const handleCLick = e => {
        let buttons = document.getElementsByClassName('timeRangeBtn');
        
        props.changeTimeRange(e);

        Array.from(buttons).forEach(btn => btn.classList.remove('btnSelected'));
        document.getElementById(e.target.id).classList.add('btnSelected');
    }

    const darkModeToggle = () =>{
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
    }


    return(
        <section className='btnContainer'>
            <button 
                className='dataBtn'
                id='loadSpotifyDataBtn'
                onClick={props.getSpotifyData}>
                    Fetch Spotfiy Data
            </button>
            <div className='timeRangeBtnContainer'>
                <h4>Time Ranges</h4>
                <button
                    className='timeRangeBtn btnSelected'
                    id='farTimeRange'
                    onClick={handleCLick}>
                    One Year
                </button>
                <button
                    className='timeRangeBtn'
                    id='mediumTimeRange'
                    onClick={handleCLick}>
                    Six Months
                </button>
                <button
                    className='timeRangeBtn'
                    id='shortTimeRange'
                    onClick={handleCLick}>
                    One Month
                </button>
            </div> 
            <div className='info'>
                <p>This app will use the Spotify data display information about your listening habits.
                    This will only account for your top 50 most played artists and tracks in each given
                    time range. This app will be more effective with using a frequently used acccount.
                    To see an example of this looks like with a frequently used account click the 
                    example button.</p>
            </div> 
            <button
                    className='dataBtn'
                    id='loadExampleDataBtn'
                    onClick={props.getExampleData}>
                    Load Example Data
            </button>
            <div className="switch">
                <input id="theme-toggle" type="checkbox" />
                <label htmlFor="theme-toggle" onClick={darkModeToggle}></label>
                &nbsp; Toggle Theme
            </div>
        </section>
    )
}

export default ControlPanel;