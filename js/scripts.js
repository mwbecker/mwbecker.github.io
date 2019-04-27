function showDescription(descript) {
    $("#description").html("Description: " + descript);
}

function hideDescription() {
    $("#description").html("");
}

function validate() {
    var zip = $("#zip").val();
    var zipLength = zip.length;
      if ((zipLength == 5) == false) {
        alert("Zip must be 5 digits");
        return false;
      }
      if ((isNaN(zip) == true)) {
        alert ("Zip must be numerical");
        return false;
      }
      var message = document.getElementById('mesg').value;
      var subjecti = "Visitor Inquiry Form";
      window.open("mailto:infoneeded@prantlsbakery.com?subject=" + encodeURIComponent(subjecti) + "&body=" + encodeURIComponent(message));      
}


$(function () {
    $('#containeri').highcharts({
    		chart: {
        		type: 'column'
    		},
        title: {
            text: 'Busiest Hours- Shadyside',
            x: -20 //center
        },
       
        xAxis: {
            categories: [
            '7am',
            '8am',
            '9am',
            '10am',
            '11am',
            '12pm',
            '1pm',
            '2pm',
            '3pm',
            '4pm',
            '5pm',
        ]
        },
        yAxis: {
            title: {
                text: 'People'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        colors:['#009933'],
        series: [{
            name: 'Number of people',
        		data: [10, 8, 24, 5, 7, 32, 16, 18, 27, 39, 32]
        }]
    });
});

$(function () {
    $('#containerj').highcharts({
    		chart: {
        		type: 'column'
    		},
        title: {
            text: 'Busiest Hours- Downtown',
            x: -20 //center
        },
       
        xAxis: {
            categories: [
            '7am',
            '8am',
            '9am',
            '10am',
            '11am',
            '12pm',
            '1pm',
            '2pm',
            '3pm',
            '4pm',
            '5pm',
        ]
        },
        yAxis: {
            title: {
                text: 'People'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        colors:['#009933'],
        series: [{
            name: 'Number of people',
        		data: [24, 12, 16, 8, 11, 19, 15, 18, 13, 21, 35]
        }]
    });
});

$(function () {
    $('#containerk').highcharts({
    		chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Top Selling Products as Percentage of total profit'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Burnt Almond Torte',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Buttery Croisants',
            y: 11.84
        }, {
            name: 'Key Lime Pie',
            y: 10.85
        }, {
            name: 'Wedding Cakes',
            y: 4.67
        }, {
            name: 'Christmas Cakes',
            y: 4.18
        }, {
            name: 'Easter Cakes',
            y: 1.64
        }, {
            name: 'Specialty Cakes',
            y: 1.6
        }, {
            name: 'Cupcakes',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
        }]
    }]
    });
});
