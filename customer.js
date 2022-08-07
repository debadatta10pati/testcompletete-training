//Object

let customer = {
    age : 34,
    customerName : 'Simon',
    email: "simon@gmail.com",
    maritalStatus : 'Single'
};
console.log(customer);


//Dot . Easier and default.
customer.age = 40;
console.log(customer.age);

//Bracket . When we want to choose the variable at runtime.
let userSelection = 'email';
customer[userSelection]= 'simonpaul@gmail.com';
console.log(customer.email);
