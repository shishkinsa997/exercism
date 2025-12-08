// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) throw new Error('Oops');
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} t
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(t) {
  if (t === null) throw new ArgumentError('Oops');
  if (t > 500) throw new OverheatingError(t);
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} a
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(a) {
  try {
    a.check()
  } catch (e) {
    if (e instanceof ArgumentError) {
      a.alertDeadSensor()
    }
    else if (e instanceof OverheatingError) {
      if (e.temperature > 600) a.shutdown()
      else if (e.temperature < 600) a.alertOverheating()
    } else {
      throw e;
    }
  }
}
