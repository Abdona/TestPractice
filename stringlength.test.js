const strLength = require('./stringlength');

test('the Lenght of String',() => {
    expect(strLength('Hello')).toBe(5);
    expect(() => strLength('dcefeqasdsadsdasds')).toThrow(Error);
});