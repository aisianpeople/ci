const functions = require('./project');

let {getGreeting, getNumber} = functions

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('returns a number', () => {
  expect(getNumber()).toBe(2);
});