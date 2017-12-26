const readline = require('readline')

const { randomlySelectOneOfThe, determineEmotionOf } = require('./utils')
const { GREETINGS, POSITIVE, NEGATIVE, CONFUSED, NEUTRAL, SWEET_NOTHINGS, INSTRUMENTS_OF_TOUGH_LOVE, MIXED_RESPONSES, PROMPTS, ASSERTIONS, FAREWELLS } = require('./responses')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let clearSignalFromLastAnswer = false

console.log(randomlySelectOneOfThe(GREETINGS))
rl.prompt()

rl.on('line', (answer) => {
  switch (determineEmotionOf(answer)) {
    case POSITIVE:
      console.log(randomlySelectOneOfThe(INSTRUMENTS_OF_TOUGH_LOVE))
      clearSignalFromLastAnswer = true
      break
    case NEGATIVE:
      console.log(randomlySelectOneOfThe(SWEET_NOTHINGS))
      clearSignalFromLastAnswer = true
      break
    case CONFUSED:
      console.log(randomlySelectOneOfThe(MIXED_RESPONSES))
      clearSignalFromLastAnswer = false
      break
    default: // NEUTRAL
      clearSignalFromLastAnswer
      ? console.log(randomlySelectOneOfThe(ASSERTIONS))
      : console.log(randomlySelectOneOfThe(PROMPTS))
      clearSignalFromLastAnswer = false
  }
  rl.prompt()
}).on('close', () => {
  rl.clearLine()
  console.log(randomlySelectOneOfThe(FAREWELLS))
  process.exit(0)
})
