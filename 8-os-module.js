// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share the minimum)

const os = require('os') //built in module

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`System Uptime is ${os.uptime()} seconds`); //use template string


//create an operating system object with properties
const currentOS = {
name:os.type(), 
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem()
}
console.log(currentOS)  //return the object 

