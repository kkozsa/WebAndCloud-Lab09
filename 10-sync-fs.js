// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share the minimum)

const {readFileSync, writeFileSync} = require('fs')
console.log('start');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first, second)

// If the file is not there, then node will create one, otherwise it will use the file which is there already

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});
console.log('Done with the task');
console.log('Starting the next');

