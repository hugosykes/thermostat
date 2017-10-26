$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').html(thermostat.temperature());

  // $(".tempDisplay").hide(2000);
  $('#temperature-up').click(function() {
    thermostat.up();
    $('#temperature').html(thermostat.temperature());
    $('#usage').html(thermostat.currentEnergyUsage());
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    $('#temperature').html(thermostat.temperature());
    $('#usage').html(thermostat.currentEnergyUsage());
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    $('#temperature').html(thermostat.temperature());
    $('#usage').html(thermostat.currentEnergyUsage());
  });

  $('#powerSave').click(function() {
    thermostat.powerSavingMode();
  });

  $('#usage').html(thermostat.currentEnergyUsage());

});
