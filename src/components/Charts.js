import React from 'react';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';


function Charts({ repos }) {

    //Top Language Pie Chart Data

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
        labels: starred.map(i => i.name).slice(0, 5),
        responsive: true,
        maintainAspectRatio: false,
        datasets: [{
            data: starred.map(i => i.stargazers_count).slice(0, 5),
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

    //Stars per Language Doughnut Chart
    const languages = [];

    repos
        .filter(i => i.language)
        .forEach(repo => {
            const idx = languages.findIndex(i => i.lang === repo.language);
            if (idx !== -1) {
                languages[idx].stars += repo.stargazers_count;
            } else {
                languages.push({
                    lang: repo.language,
                    stars: repo.stargazers_count,
                    color: repo.languageColor
                });
            }
        });

    const sorted = languages.sort((a, b) => b.stars - a.stars);

    let doughnutData = {
        labels: sorted.map(i => i.lang),
        responsive: true,
        maintainAspectRatio: false,
        datasets: [{
            data: sorted.map(i => i.stars),
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






    return (
        <div className='charts'>
            <div className="pie">

            <Pie 
            options={{
                responsive: true,
                maintainAspectRatio: true
            }}
             data={pieData} />
            </div>
            <div className="bar">

            <Bar 
            options={{
                responsive: true,
                maintainAspectRatio: true
            }} data={barData} />
            </div>
            <div className="doughnut">

            <Doughnut 
            options={{
                responsive: true,
                maintainAspectRatio: true
            }} data={doughnutData} />
            </div>
        </div >
    )
}

export default Charts;