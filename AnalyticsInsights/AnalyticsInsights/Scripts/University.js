$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'university-container',
            type: 'pie',

        },
        colors: ['#A9A9A9', '#00008B','#ffa500'],


        title: {
            text: 'Választandó egyetem',
            style: {
                color: '#0A0A0A',
            },
            fontSize: "18px"
        },

        plotOptions: {
            pie: {
                innerSize: '75%',
                dataLabels: {
                    enabled: false
                }

            }
        },
        credits: false,
        tooltip: {
            enabled: true,
            headerFormat: '<span style="font-size:11px">{point.key}</span><br>',
            pointFormat: '{series.name}: <b>{point.y:.1f}%</b> '
        },

        series: [{
            size: '80%',
            showInLegends: false,
            name: 'Segment',
            data: (function () {
                myData = [27.0, 13.0,13.0,27.0,10.0,10.0];
                var category = ['Sapientia Erdélyi Magyar Tudományegyetem', 'Orvosi és Gyógyszerészeti Egyetem', 'Művészeti Egyetem',
                    'Petru Maior Egyetem', 'Babeș–Bolyai Tudományegyetem','Egyéb'];
                var mySeries = [];
                for (var i in category) {
                    mySeries.push([category[i], myData[i]]);
                }
                return mySeries;
            }())
        }],


    },


        // using

        function (chart) { // on complete

            var xpos = '50%';
            var ypos = '53%';
            var circleradius = 102;

            // Render the circle
            chart.renderer.circle(xpos, ypos, circleradius).attr({
                fill: 'none',
            }).add();

            // Render the text
            var inner_text = '<p>Szakok</p><br>';
            var inner_text1 = "<p><b>".concat(myData[0]).concat("%</b></p>");
            chart.renderer.text(inner_text, 120, 240).css({
                width: circleradius * 2,
                color: 'black',
                fontSize: '25px',
                textAlign: 'center'
            }).attr({
                // why doesn't zIndex get the text in front of the chart?

                zIndex: 999
            }).add();

            chart.renderer.text(inner_text1, 130, 270).css({
                width: circleradius * 2,
                color: 'black',
                fontSize: '25px',
                textAlign: 'center'
            }).attr({
                // why doesn't zIndex get the text in front of the chart?

                zIndex: 999
            }).add();
        });


});