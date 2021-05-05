import React from 'react';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';


function Charts({ repos }) {

    //Language Pie Chart Data

    let pieData = {
        labels: [],
        responsive: true,
        maintainAspectRatio: false,
        datasets: [{
            data: [],
            backgroundColor: [
                '#61DAFB',
                '#DD1B16',
                '#41B883'
            ],
            borderColor: [
                '#61DAFB',
                '#DD1B16',
                '#41B883'
            ],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }]
    }


    repos
        .filter(i => i.language)
        .forEach(repo => {
            const idx = pieData.labels.indexOf(repo.language)
            if (idx !== -1) {
                pieData.datasets[0].data[idx]++
            } else {
                pieData.labels.push(repo.language)
                pieData.datasets[0].data.push(1)

            }
        })

    //Most Starred Bar Chart
    const starred = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    
    let barData = {
        labels: starred.map(i => i.name).slice(0,5),
        responsive: true,
        maintainAspectRatio: false,
        datasets: [{
            data: starred.map(i => i.stargazers_count).slice(0,5),
            backgroundColor: [
                '#61DAFB',
                '#DD1B16',
                '#41B883'
            ],
            borderColor: [
                '#61DAFB',
                '#DD1B16',
                '#41B883'
            ],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }]
    }
    


        
    
    return(
        <div className='charts'>
        <Pie data={pieData} />
        <Bar data={barData} />
        </div >
    )
}

export default Charts;