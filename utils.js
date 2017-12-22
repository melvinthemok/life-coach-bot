const speakeasy = require('speakeasy-nlp')

const { POSITIVE, NEGATIVE, CONFUSED, NEUTRAL } = require('./responses')

const determineEmotionOf = (answer) => {

  const positivity = speakeasy.sentiment.positivity(answer).score
  const negativity = speakeasy.sentiment.negativity(answer).score

  switch (true) {
    case positivity > 0 && negativity === 0:
      return POSITIVE
      break
    case positivity === 0 && negativity > 0:
      return NEGATIVE
      break
    case positivity > 0 && negativity > 0:
      return CONFUSED
      break
    default:
      return NEUTRAL
  }
}

const randomlySelectOneOfThe = (arr) => arr[Math.floor(Math.random()*arr.length)]

module.exports = { determineEmotionOf, randomlySelectOneOfThe }
