link = "http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=d09bd6a00bb40655fa75dc89a1f1b806&units=metric";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('temp').innerHTML = obj.main.temp;
    document.getElementById('sunset').innerHTML = obj.sys.sunset;
}
if(request.status==200){
    console.log("ERROR");
}
request.send();

Date.UTC()

var ctx = document.getElementById('mychart');
var stars = [250, 500, 1000, 1500, 2000];
var frameworks = ['Januari', 'Februari', 'Maart', 'April', 'Mei'];
  var myChart = new Chart(ctx, {
       type: 'bar',
       data:  {
       labels: frameworks,     
       datasets: [{ 
           label: 'Waterverbruik in liters',
           borderRadius: 20,  
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

            barPercentage: 0.1,
            borderWidth: 1
          
          
        
        }]
    }
 }
 ) 





