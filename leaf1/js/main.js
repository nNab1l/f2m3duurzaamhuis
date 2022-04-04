link = "http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=d09bd6a00bb40655fa75dc89a1f1b806&units=metric";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('temp').innerHTML = obj.main.temp;
    document.getElementById('sunrise').innerHTML = weather.json;


    
}
if(request.status==200){
    console.log("ERROR");
}
request.send();
let datum;
const URL = 'weather.json';
fetch(URL)
  .then(response => response.json())
  .then(weather => {
    console.log(weather);
    let milliSecondsSindsEpoch = weather.sys.sunrise * 1000;
    datum = new Date(milliSecondsSindsEpoch);
    console.log(datum.toLocaleString());
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
            "rgba(75, 192, 192, 0.2)", 
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)", 
            "rgba(75, 192, 192, 0.2)", 
            "rgba(75, 192, 192, 0.2)" 
            ],
            
            borderColor: [  
                "rgba(75, 192, 192, 1)", 
                "rgba(75, 192, 192, 1)", 
                "rgba(75, 192, 192, 1)", 
                "rgba(75, 192, 192, 1)",
                "rgba(75, 192, 192, 1)", 
            ],

            barPercentage: 0.2,
            borderWidth: 1,
            
          
          
        
        }]
    }

    
 }
 )
 
 
 
 