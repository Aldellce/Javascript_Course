// // Strict Equality Operators (Typpe + Value is same)
// // console.log(1 === 1);
// // console.log('1' === 1);

// // Lose Equality Operators ()
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == true);

// // Ternary Operator
// // if a customrt has more than 100 point0,
// // they are a 'gold' customer, otherwise,
// // they are a 'silver' customer.

// let points = 200;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);

// // logical operator
// // logical AND (&&)
// // this logical return TRUE if both operands are TRUE
//  console.log(true && true);


// // logical OR is indicated by (||)
// // Returns TRUE if one of the operands is TRUE
// let hightIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = hightIncome || goodCreditScore;
// console.log('Eligible', eligibleForLoan);

// // Not (!)
// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);

// // logical operators with non-booleans
// false || true

// false || 'adel'

// false || 1

// // [A] Falsy kind like a boolean (false), but not same
// // what is, well it have
// // undefined
// // null
// // 0
// // false
// // ''
// // NaN (not a number) a special value in javascript

// // [B] truthy is anything that in not Falsy

// // Short-circuiting.
// // false || 1 || 2

// // real world example
// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

// Bitwise operators
// in binary format, which a combination of 0 an 1
// 1 = 00000001 ( 8 bit)
// 2 = 00000010
// 3 = 00000011 
// 0 = 00000000

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AN

// WHEN can use bitwise "imagine we want to implement an access control system. so the user can have these permissions, read, write ans execute "

// read, write ans execute
// 00000100
// 00000110
// 00000111

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;
// let myPermission = 0
// myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);




