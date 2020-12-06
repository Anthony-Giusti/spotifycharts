import React from 'react';

const Artist = props => {
    if(props.sortedArtists.length === 0) {
        return (
            <h3>No data loaded yet...</h3>
        )
    } else {
        return (
        <ul>
            <li>{props.sortedArtists[props.timeRange][0].name}</li>
            <li>{props.sortedArtists[props.timeRange][1].name}</li>
            <li>{props.sortedArtists[props.timeRange][2].name}</li>
            <li>{props.sortedArtists[props.timeRange][3].name}</li>
            <li>{props.sortedArtists[props.timeRange][4].name}</li>
            <li>{props.sortedArtists[props.timeRange][5].name}</li>
            <li>{props.sortedArtists[props.timeRange][6].name}</li>
            <li>{props.sortedArtists[props.timeRange][7].name}</li>
            <li>{props.sortedArtists[props.timeRange][8].name}</li>
            <li>{props.sortedArtists[props.timeRange][9].name}</li>
        </ul>
        )
    }
}

export default Artist;