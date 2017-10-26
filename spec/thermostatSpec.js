'use strict';

describe('Thermostat tests:', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  describe("#up", function() {
    it("should increase the temperature by 1", function() {
      var temp = thermostat.temperature();
      thermostat.up();
      expect(thermostat.temperature() - temp).toEqual(1);
    });
  });

  describe("#down", function() {
    it("should decrease the temperature by 1", function() {
      var temp = thermostat.temperature();
      thermostat.down();
      expect(thermostat.temperature() - temp).toEqual(-1);
    });
  });

  it("should have a minimum temperature of 10", function() {
    for (var i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(function() {
      thermostat.down();
    }).toThrowError('Minimum temperature reached!');
  });

  describe("#powerSavingMode", function() {
    it("should have, as default, power saving mode set to off", function() {
      expect(thermostat.isOnPowerSavingMode()).toEqual(false);
    });

    it("should report power saving mode is on, when switched on", function() {
      thermostat.powerSavingMode();
      expect(thermostat.isOnPowerSavingMode()).toEqual(true);
    });
  });
});
