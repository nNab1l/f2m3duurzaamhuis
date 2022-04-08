var KWH = [6.3, 12.1, 10.4, 9.1, 8.7, 11.2, 7.9, 9.4];
var week = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8'];
var cntxt = document.getElementById('Ahmet_Chart');

var myChart = new Chart(cntxt, {
    type: 'pie',
    data: {
        labels: week,
        datasets: [
            {
                label: 'Water verbruik per week in liter',
                data: KWH,
                backgroundColor: [
                    "#33f9ff",
                    "#11f8ff",
                    "#22f8ff",
                    "#00e7ee",
                    "#00f7ff",
                    "#00c6cc",
                    "#00d6dd",
                    "#00b5bb",
                ],
                borderColor: "black",
                borderWidth: 1,
                fill: false,
                lineTension: 0
            }
        ]
    },
});