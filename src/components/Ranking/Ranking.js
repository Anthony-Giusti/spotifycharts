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
        <div className='rankingsHeader'><h2>Rankings</h2></div>
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
        <section className='rankings'>
            <Artists
                sortedArtists={props.sortedArtists}
                timeRange={props.timeRange}
                maxLength={props.maxLength}
                ArtistItemOrder={props.ArtistItemOrder}
                sortOrder={props.sortOrder}
                rankingSort={props.rankingSort}
                ArtistItemMode={props.ArtistItemMode}
                setArtistItemMode={props.setArtistItemMode}
                />
            <Tracks 
                sortedTracks={props.sortedTracks}
                timeRange={props.timeRange}
                maxLength={props.maxLength}
                TrackItemOrder={props.TrackItemOrder}
                sortOrder={props.sortOrder}
                rankingSort={props.rankingSort}
                TrackItemMode={props.TrackItemMode}/>
        </section>
        </div>
    )
}

export default Ranking;