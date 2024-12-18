// string Type Annotation
const greeting: string = "Hello, Typescript!";
console.log(greeting);

// number type annotation
let age: number = 18;
console.log(`Age: ${age}`);

// boolean type annotation
let isActive: boolean = true;
console.log(`Is Active: ${isActive}`);

// null and undefined type annotation
let emptyValue: null = null;
let notAssigned: undefined = undefined;
console.log(`Empty Value: ${emptyValue}, Not Assigned: ${notAssigned}`);

// type inference 
let inferredNumber = 100; // typescript infers this as 'number' type
let inferredString = "This is inferred";// inferred as 'string' type
console.log(`Inferred Number: ${inferredNumber}, Inferred String: ${inferredString}`); `)
