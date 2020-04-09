# Javascript Learning

## Types

```js
// boolean
myBoolean = true;
myBoolean = false;

// string
myString = 'My string with double quote';
myString = 'My string with simple quote';
myString = '1234567890'; // 🚨 BE CAREFUL IT'S NOT A NUMBER IT'S A STRING 🚨

// number
myNumber = 123456789;

// float
myFloat = 1.1;
myFloat = 1.0;

// Object
myObject = {}; // Empty object
myObject = { myKey: 'My string' }; // Object with a key called "myKey" and a string value "My String"

// Array
myArray = [];
myArray = [34, 24, 52, 56]; // Array of number
myArray = ['Banana', 'Cherry', 'Apple']; // Array of String
myArray = [{ name: 'John' }, { name: 'Doe' }, { name: 'Jack' }]; // Array of Object
```

### Array

#### Array of string

```js
myArray = ['Banana', 'Cherry', 'Apple'];

// Access to the value
console.log(myArray[0]); // "Banana"
console.log(myArray[1]); // "Cherry"
console.log(myArray[2]); // "Apple"

// Add 'Pineapple' to myArray
myArray.push('Pineapple'); // ['Banana', 'Cherry', 'Apple', 'Pineapple']

// Replace 'Pineapple' by 'Lemon'
myArray[3] = 'Lemon'; // ['Banana', 'Cherry', 'Apple', 'Lemon']
```

#### Array of object

```js
myArray = [{ name: 'John' }, { name: 'Doe' }, { name: 'Jack' }];

// Access to the name
user = myArray[0];
console.log(user.name); // "John"

console.log(myArray[0].name); // "John"
console.log(myArray[1].name); // "Doe"
console.log(myArray[2].name); // "Jack"

// Add 'Tom' to myArray
myArray.push({ name: 'Tom' }); // [{ name: 'John'}, { name: 'Doe'}, { name: 'Jack'}, { name: 'Tom'}]
```

### Object

```js
myArray = [{ name: 'John' }, { name: 'Doe' }, { name: 'Jack' }];

// Access to the value
console.log(myObject[0]); // "Banana"
console.log(myObject[1]); // "Cherry"
console.log(myObject[2]); // "Apple"

// Add 'Pineapple' to myArray
myArray.push('Pineapple'); // ['Banana', 'Cherry', 'Apple', 'Pineapple']

// Replace 'Pineapple' by 'Lemon'
myArray[3] = 'Lemon'; // ['Banana', 'Cherry', 'Apple', 'Lemon']
```
