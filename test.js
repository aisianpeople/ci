const functions = require('./project');

let {getGreeting, getNumber} = functions

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('can create a basic greeting', () => {
  expect(getGreeting('Franky')).toBe("Hi Franky");
});

test('returns a number', () => {
  expect(getNumber()).toBe(2);
});