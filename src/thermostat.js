function Thermostat() {

  const DEFAULTTEMP = 20;
  const MINIMUMTEMP = 10;

  this._temperature = DEFAULTTEMP;
  this._powerSavingMode = false;

  Thermostat.prototype.temperature = function() {
    return this._temperature;
  };

  Thermostat.prototype.up = function() {
    if (this._temperature < this.maximumTemperature()) {
      this._temperature += 1;
    } else {
      throw new Error("Maximum temperature reached!");
    }
  };

  Thermostat.prototype.down = function() {
    if (this._temperature > MINIMUMTEMP) {
      this._temperature -= 1;
    } else {
      throw new Error("Minimum temperature reached!");
    }
  };

  Thermostat.prototype.powerSavingMode = function() {
    (this._powerSavingMode === true) ? this._powerSavingMode = false: this._powerSavingMode = true;
  };

  Thermostat.prototype.isOnPowerSavingMode = function() {
    return this._powerSavingMode;
  };

  Thermostat.prototype.maximumTemperature = function() {
    var max;
    (this._powerSavingMode === true) ? max = 25 : max = 32;
    return max;
  };

  Thermostat.prototype.reset = function() {
    this._temperature = 20;
  };

}
