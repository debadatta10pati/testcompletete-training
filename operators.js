let interestRate = 10;

let principal = 100;

//Apply operator first
console.log(++interestRate);

//Increment later using operator

principal++;
console.log(principal);


//To the power of

console.log(principal**2);


principal = principal+5;

principal +=5;

// Equality and not equals

let monthlyPayment =50;
//Strict equality : Type and value
//More commonly used
console.log(monthlyPayment===50);

console.log(monthlyPayment!==50);

//Lose equality
//If the types don't match, it would convert what we have on the right side to what we have on left side
//Will only check if the values are equal
console.log(monthlyPayment=='50');
console.log(monthlyPayment==50);
console.log(true==1);

//ternary operator

let creditRating = 800;

let customerType = creditRating > 700 ? 'platinum' : 'gold';

console.log(customerType);


//Logical operators : They can return true or false or a value depending on operands

//AND, OR, NOT - boolean values

let salary = 8000;

console.log(salary>7000 && creditRating>700 );

console.log(salary>9000 || creditRating>700 );

let cardApproved = !(salary <7000);
console.log(cardApproved );

//Truthy or falsy - logical or operator
//As long as one of them is truthy , it would return the value
console.log(false || 'Deba' );

console.log(false || 78 );

console.log(false || true );

// Short circuiting : As soon as we find a truthy operand, its value is returned and the evaluation stops

console.log(false || 10 || 67 || 89 );
//Falsy values 
//undefined, null, 0, false, '', Nan
//Kind of like boolean false but not exactly

//Truthy is what is not Falsy

// When to use : to provide default values

let defaultTaxRate = 60.0;

let customTaxRate = undefined;

console.log("Final tax rate "+  (customTaxRate || defaultTaxRate));

//Precedence : Better to use parentesis

let x = 2+9 *5;

console.log(x);
let y = (2+9) *5;
console.log(y);