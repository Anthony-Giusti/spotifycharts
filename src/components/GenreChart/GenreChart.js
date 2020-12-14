import React, { Component } from 'react';

import Chart from 'chart.js';
import './GenreChart.css'

let gerneChart;
let genreNames = null;
let genreAmounts = null;

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;

class GenreChart extends Component{
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const genreData = this.props.sortedGenres[this.props.timeRange];
        if (typeof genreData === "undefined") return;
        const myChartRef = this.chartRef.current.getContext("2d");

        if (genreData[1].length > 100) {
            genreAmounts = genreData[1].filter(x => x > 3).slice(0, 15);
        } else {
            genreAmounts = genreData[1].slice(0, 15);
        }
        genreNames = genreData[0].slice(0, genreAmounts.length);
        
        if (typeof gerneChart !== "undefined") gerneChart.destroy();

        gerneChart = new Chart(myChartRef, {
            type: 'pie',
    data: {
        labels: genreNames, 
        datasets: [{
            label: '# of Votes',
            data: genreAmounts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)'
            ],
            borderColor: [],
            borderWidth: 1
        }]
    },
    options: {
    }
});

    }

    render() {
        console.log(genreNames);
        let chartHeader;
        if (genreNames == null) {
            chartHeader = 'No genre data loaded...'
        } else {
            chartHeader = 'Genre Chart'
        }
            return (
                <div className='chartContainer'>
                    <h2>{chartHeader}</h2>
                    <canvas
                        id="genreChart"
                        ref={this.chartRef}
                        />
                </div>
            )
        }
    }



export default GenreChart; 