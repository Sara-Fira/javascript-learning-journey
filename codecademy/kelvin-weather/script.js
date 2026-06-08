// Variable kelvin shows today's temperature
const kelvin = 0;

// Variable celsius shows today's temperature in Celsius degrees
const celsius = kelvin - 273;

// Variable fahrenheit shows today's temperature in Fahrenheit degrees
let fahrenheit = celsius * (9/5) + 32;

// Here we use .floor() method to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
