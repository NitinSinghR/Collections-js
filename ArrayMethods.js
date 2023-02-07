const arr1 = ["Mango", "Apple"];
const arr2 = ["Grapes", "Pineapple", "Orange"];
const arr3=["Potato","Tomato","Spinach"];
let text="CHECKING";
const ages = [72, 33, 18, 20];

console.log("Concatenation");
let fruits = arr1.concat(arr2);
console.log(fruits);

console.log("Constructor");
console.log(fruits.constructor);

console.log("Copy Within");
console.log(arr2.copyWithin(2, 0));
console.log(arr3.copyWithin(2, 0, 2));

console.log("entries");
let f = arr2.entries();
for (let x of f) {
  console.log(x);
}

console.log("Index of Apple");
let index = fruits.indexOf("Apple");
console.log(index);

console.log("Is Array");
let result =  Array.isArray(fruits);
console.log(result);

console.log("Filter");
console.log(ages.filter(checkAge));

console.log("Every");
console.log(ages.every(checkAge));

console.log("Find");
console.log(ages.find(checkAge));

console.log("Find Index");
console.log(ages.findIndex(checkAge));

console.log("some");
console.log(ages.some(checkAdult));

function checkAge(age) {
  return age > 30;
}

function checkAdult(age) {
  return age > 18;
}

console.log("fill");
fruits.fill("Kiwi", 2, 4);
console.log(fruits);

console.log("For Each");
let sum=0;
(ages.forEach(Add))
function Add(item){
    sum += item;
}
console.log(sum);

let myArr = Array.from(text);
console.log(myArr);

console.log("Includes");
console.log(fruits.includes("Mango"));

console.log("Includes at index");
console.log(fruits.includes("Kiwi", 3));

console.log("Join");
let text1 = fruits.join(" and ");
console.log(text1);

console.log("Keys");
const keys = Object.keys(fruits);

let text2 = "";
for (let x of keys) {
  text2 += x + " ";
}
console.log(text2);

console.log("Last Index Of");
let index1 = fruits.lastIndexOf("Pineapple");
console.log(index1);

console.log("Array length");
let length = fruits.length;
console.log(length);

let length1=arr3.length=2;
console.log(arr3);

console.log("Map");
const newAge = ages.map(Math.sqrt)
console.log(newAge);

console.log("Pop");
let remove=fruits.pop();
console.log(fruits);
console.log(remove);

console.log("Push");
fruits.push("Jackfruit");
console.log(fruits);

console.log("Reduce");
console.log(ages.reduce(sub));

console.log("Reduce Right");
console.log(ages.reduceRight(sub));

function sub(total,num){
    return total-num;
}

console.log("Reverse");
fruits.reverse();
console.log(fruits);

console.log("Shift");
console.log(fruits.shift());
console.log(fruits);

console.log("Slice");
const citrus = fruits.slice(1, 3);
console.log(citrus);

console.log("Sort");
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

console.log("Splice");
fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(fruits);
fruits.splice(2, 2);
console.log(fruits);

console.log("To String");
let text3 = fruits.toString();
console.log(text3);

console.log("unshift");
fruits.unshift("Lemon","Pineapple");
console.log(fruits);

console.log("Value of");
const myArray = fruits.valueOf();
console.log(myArray);