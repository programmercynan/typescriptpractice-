// string Type Annotation
var greeting = "Hello, Typescript!";
console.log(greeting);
// number type annotation
var age = 18;
console.log("Age: ".concat(age));
// boolean type annotation
var isActive = true;
console.log("Is Active: ".concat(isActive));
// null and undefined type annotation
var emptyValue = null;
var notAssigned = undefined;
console.log("Empty Value: ".concat(emptyValue, ", Not Assigned: ").concat(notAssigned));
// type inference 
var inferredNumber = 100; // typescript infers this as 'number' type
var inferredString = "This is inferred"; // inferred as 'string' type
console.log("Inferred Number: ".concat(inferredNumber, ", Inferred String: ").concat(inferredString));
")\n";
