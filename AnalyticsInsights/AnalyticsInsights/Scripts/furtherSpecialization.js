$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'furtherSpecialization-container',
            type: 'pie',
        },
        
        

        title: {
            text: 'Továbbtanulási szakirány',
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
                myData = [27.0, 10.0,5.0,2.0,12.5,2.33,5.77,5.3,6.4,8.0,4.0];
                var category = ['Humántudomány', 'Informatika', 'Jogtudomány', 'Pedagogia', 'Pszichológia', 'Tanító- és óvóképzés',
                    'Társadalomtudomány', 'Természettudomány', 'Orvos és egészségtudomány', 'Sporttudomány','Egyéb'];
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