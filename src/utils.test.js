const utils = require('./utils')

test('Test sum function', () => {
    expect(utils.sum(5, 4)).toBe(9)
})

test('Test mul function', () => {
    expect(utils.mul(5, 4)).toBe(20)
})