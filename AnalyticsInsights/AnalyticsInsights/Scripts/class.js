$(document).ready(function () {
    $.get("http://localhost:51215/Api/Chart/Classchart", function (data) {

        var chart = new Highcharts.Chart({
            chart:
            {
                renderTo: 'class-container',
                type: 'column'
            },
            colors: ['#DC143C'],

            title: {
                text:'Osztaly'
            },
            xAxis: {
                categories: [
                    '9',
                    '10',
                    '11',
                    '12',
                ],
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Szazalek'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },

            series: [ {

                    name: 'Osztaly',
                    dataLabels: {
                        enabled: true,
                        rotation: 0,
                        color: '#DC143C',
                        align: 'right',
                        format: '{y:.2f}%.', // one decimal
                        y: 0, // 10 pixels down from the top
                    },
                data: (function () {
                    var category = ['9', '10', '11', '12'];
                    console.log(category);
                    myData = [data.kilenc, data.tiz, data.tizenegy, data.tizenketto];
                    var mySeries = [];
                    for (var i in category) {
                        mySeries.push([category[i], myData[i]]);
                    }
                    return mySeries;
                }())

            }]



        });
    });
});