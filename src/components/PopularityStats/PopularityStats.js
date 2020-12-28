import React from 'react';
import './PopularityStats.css'

const PopularityStats = props => {
    if (typeof props.averageArtistPopularity === 'undefined' || props.averageTrackPopularity === 'undefined') {
        return(
            <div className='popularityStatsContainer'>
                <div className='artistsPopularity'>
                    <h3>Average Artists Populairty:</h3>
                    <p>No data loaded yet...</p>
                </div>
                <hr></hr>
                <div className='artistsPopularity'>
                    <h3>Average Track Popularity:</h3>
                    <p>No data loaded yet...</p>
                </div>
                <hr></hr>
                <h3>Top Genres</h3>
            </div>
        )
    } else {
        return (
            <section className='popularityStatsContainer popularityStatsContainerFlex'>
                <section>
                    <div className='artistPopularity'>
                        <h3>Average Artist Populairty:</h3>
                        <p>{props.averageArtistPopularity[props.timeRange]}</p>
                    </div>
                    <div  className='trackPopularity'>
                        <h3>Average Track Popularity:</h3>
                        <p>{props.averageTrackPopularity[props.timeRange]}</p>
                    </div>
                </section>
                <section className='genres'>
                    <h3>Top Genres</h3>
                    <div className='genreRanking'>
                        <ol>
                        {
                            props.sortedGenres[props.timeRange][0].map(genre => {
                                return <li>{genre}</li>
                            }).splice(0, 10)
                        }
                        </ol>
                    </div>
                </section>
                
            </section>
        )
    }

    
}

export default PopularityStats;