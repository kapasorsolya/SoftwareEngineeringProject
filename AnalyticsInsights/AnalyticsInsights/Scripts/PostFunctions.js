
var groupchart = function (elem) {

    var currentspecializationqid = elem.data('question-specialization');
    var nextSpecializationqid = elem.data('question-next_specialization');
    var Universityqid = elem.data('question-university');


    // Create the chart
    $.get("http://localhost:51215/Api/Chart/GroupBySpecialization_chart/" + currentspecializationqid, function (data) {
        console.log("postfunctions");
        var matekInfoCountValue = parseFloat(data.Matekinfo);
        // Create the chart
        var chart = new Highcharts.chart({
            chart: {
                renderTo: 'currentSpecialization-container',
                type: 'pie',
                marginTop: 0
              
            },
            title: {
                text: 'Jelenlegi szak',
                style: {
                    color: '#0A0A0A',
                },
                fontSize: "18px"

            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            legend: {
                enabled: false
            },
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            },
            series: [{
                
                
                innerSize: '75%',
                showInLegend: true,
                name: 'Segment',
                dataLabels: {
                    enabled: false
                },
                data: [
                    {
                        name: 'Tarsadalomtudomany',
                        y: data.Tarsadalomtudomany,
                        selected: true
                    }, {
                        name: 'Matematika-informatika',
                        y: data.Matekinfo
                    },
                    {
                        name: 'Termeszettudomany',
                        y: data.Termeszettudomany
                    },
                    {
                        name: 'Egyéb',
                        y: data.Egyeb
                    }
                ]

            }]
        },


            function (chart) {
                var xpos = '50%';
                var ypos = '53%';
                var circleradius = 102;

                // Render the circle
                chart.renderer.circle(xpos, ypos, circleradius).attr({
                    fill: 'none',
                }).add();

                // on complete
                chart.renderer.text('<p style="color:grey  ">Matematika-informatika szak</p>', 80, 200).css({
                    width: circleradius * 2,
                    color: 'black',
                    fontSize: '20px',
                    textAlign: 'left',

                }).attr({
                    // why doesn't zIndex get the text in front of the chart?

                    zIndex: 999
                }).add();
                console.log(matekInfoCountValue);
                matekInfoCountValue = matekInfoCountValue.toFixed(2);
                innertext = '<p style="color:black"><b>' + matekInfoCountValue + '%</p>';
                chart.renderer.text(innertext, 100, 250).css({
                    width: circleradius * 2,
                    color: 'black',
                    fontSize: '20px',
                    textAlign: 'left'
                }).attr({
                    // why doesn't zIndex get the text in front of the chart?

                    zIndex: 999
                }).add();

            });
    });


    // Create the chart
    $.get("http://localhost:51215/Api/Chart/NextSpecializtion_chart/" + nextSpecializationqid, function (data) {

        var RealStudyValue = parseFloat(data.Informatika);
        console.log(RealStudyValue);

        // Create the chart
        var chart = new Highcharts.chart({
            chart: {
                renderTo: 'furtherSpecialization-container',
                type: 'pie',
                marginTop: 0


            },



            credits: {
                enabled: false
            },

            title: {

                text: 'Továbbtanulási szakirány'

            },
            legend: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: ''
                }
            },


            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        color: '#000000',
                        connectorColor: '#000000',
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',


                    }

                }
            },



            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },


            series: [{
              
                innerSize: '75%',
                showInLegend: true,
                //dataLabels: {
                //    enabled: false
                //},

                name: 'All Specialization',
                data: (function () {
                    myData = [data.Humantudomany, data.Informatika, data.Jogtudomany, data.Pedagogia, data.Pszichologia, data.Tanito, data.Tarsadalomtudomany,
                        data.Termeszettudomany,data.Orvostudomany,data.Sporttudomany,data.Egyeb];
                    var category = ['Humántudomány', 'Informatika', 'Jogtudomány', 'Pedagogia', 'Pszichológia', 'Tanító- és óvóképzés',
                        'Társadalomtudomány', 'Természettudomány', 'Orvos és egészségtudomány', 'Sporttudomány', 'Egyéb'];
                    var mySeries = [];
                    for (var i in category) {
                        mySeries.push([category[i], myData[i]]);
                    }
                    return mySeries;
                }())
              

            }]
        },


            function (chart) {
                var xpos = '50%';
                var ypos = '53%';
                var circleradius = 102;

                // Render the circle
                chart.renderer.circle(xpos, ypos, circleradius).attr({
                    fill: 'none'
                }).add();

                // on complete
                chart.renderer.text('<p style="color:grey">Informatika</p>', 100, 220).css({
                    width: circleradius * 2,
                    color: 'black',
                    fontSize: '20px',
                    textAlign: 'left'
                }).attr({
                    // why doesn't zIndex get the text in front of the chart?

                    zIndex: 999
                }).add();


                

                var innerText = '<p style="color:black"><b>';
                innerText = innerText + RealStudyValue.toFixed(2) + '%</p>';


                chart.renderer.text(innerText, 120, 250).css({
                    width: circleradius * 2,
                    color: 'black',
                    fontSize: '20px',
                    textAlign: 'left'
                }).attr({
                    // why doesn't zIndex get the text in front of the chart?

                    zIndex: 999
                }).add();

            });
    });


    // Create the chart
    $.get("http://localhost:51215/Api/Chart/University_chart/" + Universityqid, function (data) {
        // Create the chart

        var reachValue = parseFloat(data.Sapientia);
        
        var chart = Highcharts.chart({
            chart: {
                renderTo: 'university-container',
                type: 'pie',
                marginTop: 0

            },

            title: {
                text: 'Választandó egyetem',
                align: 'center',

            },
            credits: {
                enabled: false,
            },
            legend: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },

            series: [{
              
                size: '100%',
                innerSize: '75%',
                showInLegend: true,
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                name: 'Segment',
                data: [
                    ['Sapientia Erdélyi Magyar Tudományegyetem', data.Sapientia],
                    ['Orvosi és Gyógyszerészeti Egyetem', data.Orvosi],
                    ['Művészeti Egyetem', data.Muveszeti],
                    ['Babes-Bolyai Egyetem', data.Babes],
                    ['Egyéb', data.Egyeb],


                ]
            }],
        },


            function (chart) {
                var xpos = '50%';
                var ypos = '53%';
                var circleradius = 102;

                // Render the circle
                chart.renderer.circle(xpos, ypos, circleradius).attr({
                    fill: 'none',
                }).add();

                // on complete
                var innerText = '<p style="color:grey">Sapientia EMTE </p> ';
                chart.renderer.text(innerText, 70, 220).css({
                    width: circleradius * 2,
                    color: 'black',
                    fontSize: '23px',
                    textAlign: 'center'
                }).attr({
                    // why doesn't zIndex get the text in front of the chart?

                    zIndex: 999
                }).add();

                chart.renderer.text('<p ><b>' + reachValue.toFixed(2)+ '%</p>', 120, 250).css({
                    width: circleradius * 2,
                    fontSize: '20px',
                    textAlign: 'center'
                }).attr({
                    // why doesn't zIndex get the text in front of the chart?

                    zIndex: 999
                }).add();

            });
    });
}
