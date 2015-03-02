$(document).ready(function() {
  // JSON calls
  var apiKey = '70433fafb74c3e90db90f265a6c0dced';
  var url = 'https://api.forecast.io/forecast/';
  var lati = 45.5200;
  var longi = -122.6819;
  var data;
  function getWeather() {
    // $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
    //   $('#precip').html(data.currently.precipProbability * 100);
    //   $('#temp').html(data.currently.temperature);
    // });
  }
  getWeather();

  // Refresh button
  $('form').submit(function (evt) {
    evt.preventDefault();
    getWeather();
  })

  // Side nav
  var $menuReveal = $('.menu-reveal');
  var $sideNavMask = $('.side-nav-mask');

  $menuReveal.on('click', function() {
    $sideNavMask.addClass('visible');
    $menuReveal.removeClass('visible');
  });

  $sideNavMask.on('click', function() {
    $sideNavMask.removeClass('visible');
    $menuReveal.addClass('visible');
  });










});
