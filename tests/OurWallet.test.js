const { generateSeedPhrase } = require('../src/utils/OurWallet')

test('should return 12 phrases', () => {
    expect(generateSeedPhrase().split(' ')).toHaveLength(12)
})
