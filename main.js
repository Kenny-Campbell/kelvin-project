// Step One:
var kelvin = 293;
console.log(kelvin);
// Step Two: var remains a consistent value but is not locked. So "kelvin" unitl coded otherwise
// Step Three:
console.log(kelvin - 273);
var celcius = 20;
// Step Four: var celcius is 20 because kelvin - 293 = 20
// Step Five:
console.log(celcius * (9/5) + 32);
var fehrenheit = 68;
// Step Six: I chose var instead of const because we can change var code and cannot change const code
// Step Seven:
console.log(Math.floor(68));
var fehrenheit = 68;
// Step Eight: The math.floor of 68 is 68 so the var ferenheit still = 68
// Step Nine
console.log('The temperature is TEMPERATURE degrees in Farenheit.');
console.log(`The temperature is ${fehrenheit} degress in Farenheit.`);
// Step 10: Ran program in chrome and it worked
// Step 11:
var kelvin = 0;
var celcius = kelvin - 273;
console.log(celcius);
console.log(celcius * (9/5) + 32);
// Step 12: 0 Kelvin is -459.40000000000003
