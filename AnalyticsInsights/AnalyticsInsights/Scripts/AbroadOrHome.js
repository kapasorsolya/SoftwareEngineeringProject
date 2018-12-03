$(document).ready(function () {
    $.get("http://localhost:51215/Api/Chart/AbroadOrHome_chart", function (data) {
        console.log("chart building started");

        var chart = new Highcharts.Chart({
            chart: {
                type: 'bar',
                renderTo: 'abroadorhome-container'
            },


            title: {
                text: 'Itthon vagy külföldön?',
                style: {
                    color: '#C0C0C0'
                }
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                min: 0,
                tickInterval: 5,
                title: {
                    text: ''
                },
                labels: {
                    format: '{value}%'

                },
                style: {
                    color: '#C0C0C0'
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
                    pointWidth: 55
                }
            },
            tooltip: {
                enabled: true,
                headerFormat: '<span style="font-size:11px">{point.key}</span><br>',
                pointFormat: '{series.name}: <b>{point.y:.2f}%</b> '
            },
            series: [{

                name: 'Segment',
                dataLabels: {
                    enabled: true,
                    rotation: 0,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{y:.2f}%.', // one decimal
                    y: 0, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif',
                        maxPointWidth: 500
                    }
                },
                data: (function () {
                    var category = ['Kulfoldon ', 'Itthon', 'Nem szeretnek'];
                    console.log(category);
                    myData = [data.Kulfoldon, data.Itthon, data.NemSzeretnek];
                    var mySeries = [];
                    for (var i in category) {
                        mySeries.push([category[i], myData[i]]);
                    }
                    return mySeries;
                }())
            }
            ]

        });

    });
});