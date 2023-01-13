//Ex1 10 Object predfined methods
var obj = { name: "rima", age: 24 };
// var destination = {}
///////////        Object.assign()
// Object.assign(destination, obj); //(1) it copies properties from a pre defined object to a destination object
// console.log(destination);

///////////        Object.entries()
// var objEntries = Object.entries(obj)[1]; //(2) it access the index of a predefined obj o/p is age:24 which is index 1 in the obj
// console.log(objEntries);

var obj2 = { name: "radwa", age: 12 };
///////////        Object.is()
// var isObject = Object.is(obj, obj2); //(3) it determines whether two values are the same value
// console.log(isObject);

///////////        Object.values()
//console.log(Object.values(obj)); // (4) it returns an array of the given object

///////////        Object.preventExtensions()
// Object.preventExtensions(obj2); // (5) it prevents the addition of new properties to the object

// console.log(Object.isExtensible(obj2)); // it will print out false as it is prevented from being extended

var obj3 = { name: "ahmed", age: 67 };

///////////        Object.seal()
// console.log(Object.seal(obj3)); // (6) it prevents new properties from being added to this object and it returns the object being sealed

///////////        Object.hasOwn()
// console.log(Object.hasOwn(obj3, "name")); // (7) static method returns true if the object has the indicated property.

///////////        Object.keys()
// console.log(Object.keys(obj3)); // (8) it returns an array of given object keys

///////////        Object.freeze()
// Object.freeze(obj3); //(9) Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
// obj3.age = 10;
// console.log(obj3); // it prints the old age and doesn't update it to 10


//////////          Object.fromEntries()
// var entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 42]
// ]);

// var obj4 = Object.fromEntries(entries); // (10) it is a static method transforms a list of key-value pairs into an object.
// console.log(obj4);


//-------------------------------------------------------------------------------------------------------------------------


//Ex2 10 arrays predfined methods

///////             array.concat()
// var arr1 = ['a', 'b', 'c'];
// var arr2 = ['d', 'e', 'f'];
// var arr3 = arr1.concat(arr2);

// console.log(arr3); // (1) merge two arrays it doesn't change them it returns and new array


///////             array.entries()
// var iterator1 = arr1.entries();

// console.log(iterator1.next().value); // (2) it returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// console.log(iterator1.next().value); // it returns second element in array as iterator moved


///////             array.filter()

// var words = ['spray', 'limit', 'present'];

// var result = words.filter(word => word.includes('spray')); // (3) it creates a shallow copy of a given array, filtered to tthe elements that only includes spray.

// console.log(result);


///////             array.find()
// var arr = [5, 12, 8, 130, 44];

// var found = arr.find(num => num > 10); // (4) it returns the first element in the array that matches the testing function. If no values found, undefined is returned.

// console.log(found);


///////             array.findIndex()
// var arr = [20, 80, 10, 40];
// var found = arr.findIndex(num => num > 100); // (5) it returns the index of first element in array that satisfies the condition, If no elements satisfied, -1 is returned.
// console.log(found);


///////             array.findLast()
// var arr = [20, 80, 10, 40];
// var found = arr.findLast(num => num > 40); // (6) it returns the value of first element in array from the end that satisfies the condition, If no values found, undefined is returned.
// console.log(found);


///////             array.findLastIndex()
// var arr = [90, 80, 10, 40];
// var found = arr.findLastIndex(num => num > 40); // (7) it returns the index of first element in array from the end that satisfies the condition, If no values found, -1 is returned.
// console.log(found);

///////             array.flat()
// var arr = [0, 2, 4, 5, [6, 9]]; // (8) it creates a new array with all sub-array elements concatenated into it. it makes it all into one array
// console.log(arr.flat());

///////             array.forEach()
// var arr = [1, 24, 5, 8, 3];
// arr.forEach(n => console.log(n)); // (9) it executes a function for each element in the array

///////             array.reverse()
// var arr = ['A', 'B', 'C', 'D', 'E'];
// var arrRev = arr.reverse(); // (10) it reverses the array in place and returns the reference to the same array
// console.log(arrRev);

///////             array.map()
// var arr = [1, 4, 9, 16];
// var map1 = arr.map(n => n * 2); // (11) it creates a new array with the results ofthe given function on every element in the array.
// console.log(map1);


///////             array.isArray()
// console.log(Array.isArray(17));// (12) it determines whether the passed value is an Array it returns true if it is an array and false if not
// var arr = [1, 4, 9, 16];
// console.log(Array.isArray(arr));


///////             array.some()
// var arr = [1, 7, 3, 4, 5];

// var even = n => n % 2 === 0;

// console.log(arr.some(even)); // (13) it tests whether at least one element in the array passes the test within the function, it returns true


///////             array.sort()

var arr = ['z', 'a', 'c', 'b'];
arr.sort();                  // (14) it sorts the elements of an array in place
console.log(arr); 