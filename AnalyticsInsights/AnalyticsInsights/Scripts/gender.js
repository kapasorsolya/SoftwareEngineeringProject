$(document).ready(function () {
    $.get("http://localhost:51215/Api/Chart/Genderchart", function (data) {
        var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'gender-container',
                type: 'pie'
            },
            colors: ['#1986C4', '#7DBD3B'],

            title: {
                text: 'Neme',
                style: {
                    color: '#C0C0C0'
                },
                fontSize: "18px"
            },

            plotOptions: {
                pie: {
                    innerSize: '115%',
                    dataLabels: {
                        enabled: false
                    }

                }
            },
            credits: false,
            tooltip: {
                enabled: false,
                headerFormat: '<span style="font-size:11px">{point.key}</span><br>',
                pointFormat: '{series.name}: <b>{point.y:.1f}%</b> '
            },

            series: [{
                size: '100%',
                showInLegends: false,
                name: 'Segment',
                data: (function () {
                    myData = [data.Male, data.Female];
                    var category = ['Ferfi', 'No'];
                    // the button action
                    //$('#button').click(function () {
                    var mySeries = [];
                    for (var i in category) {
                        mySeries.push([category[i], myData[i]]);
                    }
                    //var chart1 = $('#gender-container').highcharts();
                    //chart1.series[0].setData(mySeries);
                    return mySeries;
                }())
            }]


        },
    

            // using

        function (chart) { // on complete

            var xpos = '50%';
            var ypos = '53%';
            var circleradius = 102;

            // Render the circle
            chart.renderer.circle(xpos, ypos, circleradius).attr({
                fill: 'none'
            }).add();

            // Render the text
            var inner_text = '<p>Ferfi</p><br>';
            myData[0] = myData[0].toFixed(1);
            var inner_text1 = "<p><b>".concat(myData[0]).concat("%</b></p>");
            chart.renderer.text(inner_text, 130, 165).css({
                width: circleradius * 2,
                color: 'grey',
                fontSize: '25px',
                textAlign: 'center'
            }).attr({
                // why doesn't zIndex get the text in front of the chart?

                zIndex: 999
            }).add();

            chart.renderer.text(inner_text1, 120, 197).css({
                width: circleradius * 2,
                color: 'black',
                formatter: "{point.y:.1f}",
                fontSize: '25px',
                textAlign: 'center'
            }).attr({
                // why doesn't zIndex get the text in front of the chart?

                zIndex: 999
            }).add();
        });


    });
});