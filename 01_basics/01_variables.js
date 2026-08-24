const accountId = 12345
let accountEmail = "sudha@gmail.com"
var accountPassword ="12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 //not allowed

/* prefer not to use var 
because  of issue in block scope and  functional scope
*/
console.table([accountId, accountEmail, accountPassword,accountState])