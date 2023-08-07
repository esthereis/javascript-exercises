// Convert temperature from Celsius to Fahrenheit and vice versa using variables.
//F = (°C × 9/5) + 32
//C = (F - 32) / (9/5)

function toFahr(c) {
  const f = c * (9 / 5) + 32;
  return f;
}

function toCel(f) {
  const c = (f - 32) / (9 / 5);
  return c;
}

console.log(toFahr(32));
console.log(toCel(84));
