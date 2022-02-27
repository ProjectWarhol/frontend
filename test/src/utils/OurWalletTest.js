const assert =require('chai').assert
// local
const { generateSeedPhrase } = require('../../../src/utils/OurWallet')

describe('generateSeedPhrase', ()=>{
  it('should return 12 phrases', ()=> {
    assert.lengthOf(generateSeedPhrase().split(' '), 12)
  })
})
