// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share the minimum)

const path = require('path')  // Pass in the module we want to use

console.log(path.sep)  // Determine our platform specific separator delimiter properly

// Use to the join method with separator to join which will return a resulting path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// Use basename property to see the name of the base file
const base = path.basename(filePath)
console.log(base)

// Use resolve method to with directory name to be able to see the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)
