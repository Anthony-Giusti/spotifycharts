import React from 'react';

import GenreChart from '../GenreChart/GenreChart';
import PopularityStats from '../PopularityStats/PopularityStats';

const Stats = props =>{
    return(
        <div>
            <GenreChart 
                sortedGenres={props.sortedGenres}
                timeRange={props.timeRange}
            />
            <PopularityStats />
        </div>
    )
}

export default Stats;