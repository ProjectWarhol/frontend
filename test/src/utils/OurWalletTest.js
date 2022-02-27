const assert =require('chai').assert
// local
const { generateSeedPhrase } = require('../../../src/utils/OurWallet')

describe('generateSeedPhrase', ()=>{
  it('should return 12 phrases', ()=> {
    let phrases = generateSeedPhrase()
    let result = phrases.split(' ')
    assert.lengthOf(result, 12)
  })
})
