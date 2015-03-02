$(document).ready(function() {
  // JSON calls
  var apiKey = '70433fafb74c3e90db90f265a6c0dced';
  var url = 'https://api.forecast.io/forecast/';
  var latit = 45.5200;
  var longit = -122.6819;
  var data;
  function getWeather() {
    $.getJSON(url + apiKey + "/" + latit + "," + longit + "?callback=?", function(data) {
      $('#precip').html(data.currently.precipProbability * 100);
      $('#temp').html(data.currently.temperature);
    });
  }
  getWeather();

  // Refresh button
  $('#refresh-weather').submit(function (evt) {
    evt.preventDefault();
    getWeather();
  })

  // Side nav
  var $menuReveal = $('.menu-reveal');
  var $sideNavMask = $('.side-nav-mask');
  var $sideNav = $('.side-nav');
  var $refreshBtn = $('.refresh-btn');

  $menuReveal.on('click', function() {
    $sideNavMask.addClass('visible');
    $sideNav.addClass('visible');
    $refreshBtn.addClass('visible');
    $menuReveal.removeClass('visible');
    });

  $sideNavMask.on('click', function() {
    $sideNavMask.removeClass('visible');
    $sideNav.removeClass('visible');
    $refreshBtn.removeClass('visible');
    $menuReveal.addClass('visible');
  });

  $('#refresh-location').submit(function(evt) {
    evt.preventDefault();
    latit = $("#lati").val();
    longit = $("#longi").val();
    getWeather();
    $sideNavMask.removeClass('visible');
    $sideNav.removeClass('visible');
    $refreshBtn.removeClass('visible');
    $menuReveal.addClass('visible');
  });










});
