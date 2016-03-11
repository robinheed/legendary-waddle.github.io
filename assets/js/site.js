$(document).ready(function() {
  $.simpleWeather({
    zipcode: '',
    woeid: '2357536', //2357536
    location: 'Lund Sweden',
    unit: 'c',
    success: function(weather) {
      var windSpeedMS = Math.round(weather.wind.speed / 3.6);

      html = '<div class="weather-icon"><i class="icon-'+weather.code+'"></i></div>';
      html += '<p><strong>'+weather.city+'</strong>&nbsp;'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+windSpeedMS+' m/s</li></ul>';
      html += '<ul>';
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<li class="forecast"><i class="icon-'+weather.forecast[i].code+'"></i>';
        html += '<span class="forecast-temp-high">'+weather.forecast[i].high+'</span> <span class="forecast-temp-low">'+weather.forecast[i].low+'</span>';
        html += '<span class="forecast-day">'+weather.forecast[i].day+'</span></li>';
      }
      html += '</ul>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

  $.simpleWeather({
    zipcode: '',
    woeid: '2487956', //2357536
    location: 'Patamalm, Sweden',
    unit: 'c',
    success: function(weather) {
      var windSpeedMS = Math.round(weather.wind.speed / 3.6);

      html = '<div class="weather-icon"><i class="icon-'+weather.code+'"></i></div>';
      html += '<p><strong>'+weather.city+'</strong>&nbsp;'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+windSpeedMS+' m/s</li></ul>';
      html += '<ul>';
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<li class="forecast"><i class="icon-'+weather.forecast[i].code+'"></i>';
        html += '<span class="forecast-temp-high">'+weather.forecast[i].high+'</span> <span class="forecast-temp-low">'+weather.forecast[i].low+'</span>';
        html += '<span class="forecast-day">'+weather.forecast[i].day+'</span></li>';
      }
      html += '</ul>';

      $("#weather2").html(html);
    },
    error: function(error) {
      $("#weather2").html('<p>'+error+'</p>');
    }
  });
});
