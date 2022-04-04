link = "http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=d09bd6a00bb40655fa75dc89a1f1b806&units=metric";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    let milliSecondsSindsEpoch = obj.sys.sunrise * 1000;
    datum = new Date(milliSecondsSindsEpoch);
    console.log(obj);
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('temp').innerHTML = obj.main.temp;
    document.getElementById('sunrise').innerHTML = datum.toLocaleTimeString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } )
}

if(request.status==200){
    console.log("ERROR");
}
request.send();
let datum;
const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=d09bd6a00bb40655fa75dc89a1f1b806&units=metric';
fetch(URL)
  .then(response => response.json())
  .then(weather => {
    console.log(weather);
    let milliSecondsSindsEpoch = weather.sys.sunrise * 1000;
    datum = new Date(milliSecondsSindsEpoch);
    console.log(datum.toLocaleString());
  });



var ctx = document.getElementById('myChart');
var stars = [250, 500, 1000, 1500, 2000];
var frameworks = ['Januari', 'Februari', 'Maart', 'April', 'Mei'];
  var myChart = new Chart(ctx, {
       type: 'bar',
       data:  {
       labels: frameworks,     
       datasets: [{ 
           label: 'Waterverbruik in liters',
           borderRadius: 0,  
           data: stars,
           backgroundColor: [ 
            "#94c49456", 
            "#94c49456",
            "#94c49456", 
            "#94c49456", 
            "#94c49456" 
            ],
            
            borderColor: [  
                "#94c494", 
                "#94c494", 
                "#94c494", 
                "#94c494",
                "#94c494", 
            ],

            barPercentage: 0.1,
            borderWidth: 02,
            
          
          
        
        }]
    }

    
 }
 )
 

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
                     "#99fcff",
                     "#77fbff",
                     "#55faff",
                     "#33f9ff",
                     "#11f8ff",
                     "#00e7ee",
                     "#00c6cc",
                     "#00a5aa",
                 ],
                 borderColor: "black",
                 borderWidth: 1,
                 fill: false,
                 lineTension: 0
             }
         ]
     },
 });
 
 

 Date.UTC()


 function startTime() {
     const today = new Date();
     let h = today.getHours();
     let m = today.getMinutes();
     let s = today.getSeconds();
     m = checkTime(m);
     s = checkTime(s);
     document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
     setTimeout(startTime, 1000);
   }
   
   function checkTime(i) {
     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
     return i;
   }
 
 let today = new Date().toISOString().slice(0, 10)
 
 document.getElementById("date").innerHTML = today;
 