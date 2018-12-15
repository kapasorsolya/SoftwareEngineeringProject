$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'gender-container',
            type: 'pie',



        },
        colors: ['#F08080', '#1A5276'],

        title: {
            text: 'Nemek szerinti eloszlás',
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
            size: '100%',
            innerSize: '75%',
            showInLegends: false,
            name: 'Segment',
            data: (function () {
                myData = [27.0, 73.0];
                var category = ['Férfi', 'Nő'];
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
            var inner_text = '<p>Férfi</p><br>';
            var inner_text1 = "<p><b>".concat(myData[0]).concat("%</b></p>");
            chart.renderer.text(inner_text, 130, 165).css({
                width: circleradius * 2,
                color: 'black',
                fontSize: '25px',
                textAlign: 'center'
            }).attr({
                // why doesn't zIndex get the text in front of the chart?

                zIndex: 999
            }).add();

            chart.renderer.text(inner_text1, 130, 197).css({
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