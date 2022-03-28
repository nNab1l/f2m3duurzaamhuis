link = "http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=d09bd6a00bb40655fa75dc89a1f1b806&units=metric";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    let sunrise = new Date();
  sunrise.setTime(1648445075);
  console.log(sunrise)
    console.log(obj);
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('temp').innerHTML = obj.main.temp;
    document.getElementById('sunrise').innerHTML = sunrise;


    
}
if(request.status==200){
    console.log("ERROR");
}
request.send();







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
