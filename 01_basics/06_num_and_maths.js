const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); //give the length of the number
console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.456
console.log(otherNumber.toPrecision(4));// give the number with 4 digits

const hundred = 100000
console.log(hundred.toLocaleString("en-IN")); //1,00,000

//++++++++++++++math object+++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.7)); //5
console.log(Math.floor(4.7)); //4
console.log(Math.ceil(4.7)); //5
console.log(Math.min(4,7,1,9)); //1
console.log(Math.max(4,7,1,9)); //9

console.log(Math.random()); //give the random number between 0 to 1
console.log(Math.random()*10); //give the random number between 0 to 10
console.log(Math.floor(Math.random()*10)); //give the random number between 0 to 10 but in integer    
console.log(Math.floor(Math.random()*10)+1); //give the random number between 1 to 10 but in integer

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min); //give the random number between 10 to 20 but in integer

