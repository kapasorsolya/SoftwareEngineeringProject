$(function () {
    var chart = new Highcharts.Chart({
        chart:
        {
            renderTo: 'class-container',
            type: 'column'
        },
        title: {
            text: 'Class Chart'
        },
        xAxis: {
            categories: [
                '9',
                '10',
                '11',
                '12',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage'
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
        series: [{
            name: '9',
            data: [49.9]

        }, {
            name: '10',
            data: [83.6]

        }, {
            name: '11',
            data: [48.9]

        }, {
            name: '12',
            data: [42.4]

        }]
    });
});