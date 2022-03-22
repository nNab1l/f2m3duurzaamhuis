link = "http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=d09bd6a00bb40655fa75dc89a1f1b806&units=metric";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('temp').innerHTML = obj.main.temp;
}
if(request.status==200){
    console.log("ERROR");
}
request.send();





