let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
// "33abc"=> NaN(not a number)
// true=> 1; false=> 0

let isLoggedIn = "sudha"
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1=>true; 0=>false
//""=>false
//"sudha"=> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//lec-4 *************Operations*******************
let value =3
let negValue = - value // converts the given value in negative
console.log(negValue);

let str1 = " hello"
let str2 = " sudha"

let str3 = str1 + str2
console.log(str3); // hello sudha

// tricky part --->
console.log("1" +2); //12
console.log(1+ "2"); //12
console.log("1" + 2 + 2); //122
console.log(1+2+"2"); // 32

console.log(true)//---> true
console.log(+true);// ---> 1
console.log(true+); //--->error


