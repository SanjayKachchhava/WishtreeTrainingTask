# JavaScript Types are Dynamic

```
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
```

- JS String can be enclosed in single or double quotes


- Extra large or extra small numbers can be written with scientific (exponential) notation:
```
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123
```
- `typeof` Operator

- `BigInt` - Javascript DataType

```
let x = BigInt("123456789012345678901234567890");
```

- `udefine` - In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
- Any variable can be emptied, by setting the value to `undefined`. The type will also be undefined.


- accessing object's properties
    1. `objectName.propertyName`
    2. `objectName['propertyName']`

### slice method of JS string
- If a parameter is negative, the position is counted from the end of the string:
- `let part = text.slice(-12);`

- `substring(start,end)` is similar to `slice()`. The difference is that start and end values less than 0 are treated as 0 in substring().

- `substr(start,length)` the second parameter specifies the length of the extracted part.

- `replace()` method of JS string
- `replaceAll()` method of JS string
- `trim()` method of JS string
- `trimEnd()` method of JS string
- `trimStart()` method of JS
- `padStart()` and `padEnd()` method of JS string
- `charCodeAt()` method of JS string
- text.`split(",")` Split on commas
- text.`split("")` will return an array of single characters:
- `search()` method of JS string
- text.`match(/ain/g)` regular expression /regular expression/g => g(global) denotes match with all occurence of **ain** otherwise it will match with only first occurence of **ain**

- The `includes()` method returns true if a string contains a specified value.
- `startsWith()` method of JS string
- You can use the global JavaScript function `isNaN()` to find out if a value is a not a number
- `typeof Infinity;`
- A `BigInt` is created by appending 'n' to the end of an integer literal — ex: 14n — or by calling the function `BigInt()`
-  Array.isArray(fruits) `OR` fruits instanceof Array;

- `map()` method of array
- `filter()` method of array

```
<script type="module">
import message from "./message.js";
</script>
```

