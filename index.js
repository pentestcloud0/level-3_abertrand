const { sayHello } = require('./lib')

console.log('Flag: ' + process.env.FLAG.split('').reverse().join(''))
