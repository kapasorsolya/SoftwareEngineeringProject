$(function () {
    Highcharts.chart('abroadorhome-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Külföldön vagy itthon?'
        },
        xAxis: {
            categories: ['Külföldön', 'Itthon', 'Nem szeretnék']
        },
        yAxis: {
            min: 0,
            tickInterval: 5,
            title: {
                text: ''
            },
            labels: {
                format: '{value}%'

            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                pointWidth: 35
            }
        },

        series: [{
            data: [5, 13, 14],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#FFFFFF',
                align: 'right',
                format: '{y}%', // one decimal
                y: 0, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif',
                    maxPointWidth: 500,
                }
            }
        }],

    });

});