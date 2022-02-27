const assert = require('chai').assert
// local
const {
    generateSeedPhrase,
    createOurWallet,
} = require('../../../src/utils/OurWallet')

describe('generateSeedPhrase', () => {
    it('should return 12 words', () => {
        const phrases = generateSeedPhrase()
        const actual = phrases.split(' ')
        assert.lengthOf(actual, 12)
    })
})

describe('createOurWallet', () => {
    const actual = createOurWallet()
    it('should return wallet and seedPhrase as keys', () => {
        const expected = {
            wallet: 'new wallet',
            seedPhrase: 'new seed phrase',
        }
        assert.hasAllKeys(actual, expected)
    })
    it('should return wallet and seedPhrase as keys', () => {
        const notExpected = {
            random_one: 'random_one',
            random_two: 'random_two',
        }
        assert.doesNotHaveAnyKeys(actual, notExpected)
    })
})
