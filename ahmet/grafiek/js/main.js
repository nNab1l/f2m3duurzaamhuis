var KWH = [13518, 13522, 13532, 13537, 13542, 13548, 13552];
var week = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];
var cntxt = document.getElementById('Ahmet_Chart');

var myChart = new Chart(cntxt, {
    type: 'pie',
    data: {
        labels: week,
        datasets: [
            {
                label: 'Elektriciteit verbruik per dag in Kilo Watt per uur',
                data: KWH,
                backgroundColor: [
                    "#94c494",
                    "#94c494",
                    "#94c494",
                    "#94c494",
                    "#94c494",
                    "#94c494",
                    "#94c494",
                    "#94c494",
                ],
                borderColor: "#7fd27f",
                borderWidth: 1,
                fill: false,
                lineTension: 0
            }
        ]
    },
});