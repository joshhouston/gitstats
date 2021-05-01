import React, {useState} from 'react';
import {Doughnut} from 'react-chartjs-2';


function Charts({repos}) {
    let language = []
    let counter = 0
    
    let data = {
        labels: [],
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
            const idx = data.labels.indexOf(repo.language)
            if(idx !== -1){
                data.datasets[0].data[idx]++
            }else {
                data.labels.push(repo.language)
                data.datasets[0].data.push(1)
                
            }
        })
        
    
    return (
        <div>
            <Doughnut
                data={data}
             />
        </div>
    )
}

export default Charts;