const readline = require('readline')
const { randomlySelectOneOfThe } = require('./utils')
const { GREETINGS, SWEET_NOTHINGS, ASSERTIONS, FAREWELLS } = require('./responses')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let alternator = true

console.log(randomlySelectOneOfThe(GREETINGS))
rl.prompt()

rl.on('line', () => {
  alternator
  ? console.log(randomlySelectOneOfThe(SWEET_NOTHINGS))
  : console.log(randomlySelectOneOfThe(ASSERTIONS))
  alternator = !alternator
  rl.prompt()
}).on('close', () => {
  rl.clearLine()
  console.log(randomlySelectOneOfThe(FAREWELLS))
  process.exit(0)
})
