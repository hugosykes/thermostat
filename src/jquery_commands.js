$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').html(thermostat.temperature());

  function update() {
    $('#temperature').html(thermostat.temperature());

    $('#usage').html(thermostat.currentEnergyUsage());

    $('#usage').css('color', function() {
      if (thermostat.currentEnergyUsage() == 'Low usage') {
        return 'green';
      } else if (thermostat.currentEnergyUsage() == 'Medium usage') {
        return 'black';
      } else {
        return 'red';
      }
    });

  };

  $('#temperature-up').click(function() {
    thermostat.up();
    update();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    update();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    update();
  });

  $('#powerSave').click(function() {
    thermostat.powerSavingMode();
    update();
  });

  $('#usage').html(thermostat.currentEnergyUsage());
  $.get('http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=633cd34538953af2accd84fb74172997', function(weatherResponse) {
    $('#weather').html(Math.round((weatherResponse.list[0].main.temp - 273)));
  });

});
