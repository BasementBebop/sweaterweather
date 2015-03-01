$(document).ready(function() {

  var apiKey = '70433fafb74c3e90db90f265a6c0dced';
  var url = 'https://api.forecast.io/forecast/';
  var lati = 45.5200;
  var longi = -122.6819;
  var data;
  function getWeather() {
    $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
      $('#precip').html(data.currently.precipProbability * 100);
      $('#temp').html(data.currently.temperature);
    });
  }
  getWeather();
});
