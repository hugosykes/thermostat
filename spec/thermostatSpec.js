// 'use strict';

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

  it("It should have a maximum temperature, with power save mode on, of 25", function() {
    for (var i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(function() {
      thermostat.up();
    }).toThrowError('Maximum temperature reached!');
  });

  it("It should have a maximum temperature, with power save mode off, of 32", function() {
    thermostat.powerSavingMode();
    for (var i = 0; i < 12; i++) {
      thermostat.up();
    }
    expect(function() {
      thermostat.up();
    }).toThrowError('Maximum temperature reached!');
  });

  it("It should have a reset button which returns temp to 20", function() {
    thermostat.down();
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(20);
  });

  describe("#powerSavingMode", function() {
    it("should have, as default, power saving mode set to on", function() {
      expect(thermostat.isOnPowerSavingMode()).toBe(true);
    });

    it("should report power saving mode is off, when switched off", function() {
      thermostat.powerSavingMode();
      expect(thermostat.isOnPowerSavingMode()).toBe(false);
    });
  });

  describe("#currentEnergyUsage", function() {
    it("should have 'low-usage' when temperature is beneath 18 degrees", function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
    });

    it("should have 'medium-usage' when temperature is between 18 and 24 degrees", function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature()).toEqual(17);
      for (var i = 0; i < 7; i++) {
        thermostat.up();
        expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
      }
    });

    it("should have 'high-usage' when temperature is greater than or equal to 25 degrees", function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
    });

  });
});
