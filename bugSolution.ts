function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(1, 2); // Correct usage
let result2: number; // type assertion

let num1 = 1;
let num2 = "2";

if (isNumber(num1) && isNumber(Number(num2))){
    result2 = add(num1, Number(num2));
} else {
    console.log("Invalid input type")
}
console.log(result1); // Output: 3
console.log(result2); // Output: 3