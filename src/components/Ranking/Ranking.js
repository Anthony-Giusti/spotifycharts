import React from 'react';
import Artists from '../Artists/Artists';
import Tracks from '../Tracks/Tracks';
import './Ranking.css';


const Ranking = props => {

    const handleCLick = e => {
        let buttons = document.getElementsByClassName('lengthBtn');
        Array.from(buttons).forEach(btn => btn.classList.remove('btnSelected'));
        props.changeMaxLength(e);
        document.getElementById(e.target.id).classList.add('btnSelected');
    }

    return (
        <div className='rankingsContainer'>
        <hr></hr>
        <div className='lengthBtnContainer'> 
                <button
                    className='lengthBtn btnSelected'
                    id='maxLength5' 
                    onClick={handleCLick}>
                    Show 5 Items</button>
                <button
                    className='lengthBtn'
                    id='maxLength10' 
                    onClick={handleCLick}>
                    Show 10 Items</button>
                <button
                    className='lengthBtn'
                    id='maxLength25' 
                    onClick={handleCLick}>
                    Show 25 Items</button>
                <button
                    className='lengthBtn'
                    id='maxLength50' 
                    onClick={handleCLick}>
                    Show 50 Items </button>
        </div>
        <div className='rankings'>
            <Artists
                sortByPlays={props.sortByPlays}
                sortByPopularity={props.sortByPopularity}
                sortedArtists={props.sortedArtists}
                timeRange={props.timeRange}
                maxLength={props.maxLength}
                />
            <Tracks 
                sortByPlays={props.sortByPlays}
                sortByPopularity={props.sortByPopularity}
                sortedTracks={props.sortedTracks}
                timeRange={props.timeRange}
                maxLength={props.maxLength}/>
        </div>
        </div>
    )
}

export default Ranking;