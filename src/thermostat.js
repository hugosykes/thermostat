function Thermostat() {

  const DEFAULTTEMP = 20;
  const MINIMUMTEMP = 10;

  this._temperature = DEFAULTTEMP;
  this._powerSavingMode = false;

  Thermostat.prototype.temperature = function() {
    return this._temperature;
  };

  Thermostat.prototype.up = function() {
    this._temperature += 1;
  };

  Thermostat.prototype.down = function() {
    if (this._temperature > MINIMUMTEMP) {
      this._temperature -= 1;
    } else {
      throw new Error("Minimum temperature reached!");
    };
  };

  Thermostat.prototype.powerSavingMode = function() {
    (this._powerSavingMode === true) ? this._powerSavingMode = false: this._powerSavingMode = true;
  };

  Thermostat.prototype.isOnPowerSavingMode = function() {
    return this._powerSavingMode;
  };

};
