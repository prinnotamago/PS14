$(document).ready(function(){

  function getWeatherReport(){
    $.ajax({
      method: 'GET',
      url: '/weather.json',
      success: displayWeatherReport
    });    
  }

  function displayWeatherReport(e){
    $('#weather_info').html(e.temprature + "℃です");
  }
  
  setInterval(getWeatherReport, 1000);

});
