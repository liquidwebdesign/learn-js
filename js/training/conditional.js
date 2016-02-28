// Conditional statement

a = 49;

if (a < 50) {
	console.log("This number is less than 50.");
} else {
	console.log("This number is greater than 50.");
}

// Operators and Expressions

var1 = 50;
var2 = 50;
result = var1 + var2;
console.log(result);

// Arithmetic Operators

result += 100;
console.log(result);

// Operator Precedence

operatorResult = 5 + 5 * 10;
console.log(operatorResult);

// Change the order of precedence

operatorResult = (5 + 5) * 10;
console.log(operatorResult);

// Equality

var1 = 50;
var2 = 50;
if (var1 === var2) {
	console.log("They are equal!");
} else {
	console.log("They are not equal!");
}

// Equality with different data types

var3 = "50";
var4 = 50;
if (var3 === var4) {
	console.log("They are equal.");
} else {
	console.log("They are not equal.");
}

// Logical and/or operators

var5 = "50";
var6 = 50;
if ( (var3 === var4) && (var5 === var6) ) {
	console.log("They are equal.");
} else {
	console.log("They are not equal.");
}

var5 = "50";
var6 = 50;
if ( (var3 === var4) || (var5 === var6) ) {
	console.log("They are equal.");
} else {
	console.log("They are not equal.");
}

// Modulus

var year = 2003;
var remainder = year % 4;
console.log(remainder);

// Increment/Decrement

a = a + 1;
a += 1;
a++;
++a;

a = a - 1;
a -= 1;
a--;
--a;
