const sum = require('./utils').sum

test('Test sum function', () => {
    expect(sum(5, 4)).toBe(10)
})