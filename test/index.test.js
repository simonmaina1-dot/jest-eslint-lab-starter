//capitalizeWords
const { capitalizeWords } = require('../index.js');

describe('capitalizeWords', () => {
test('capitalizes each word in a normal sentence', () => {
expect(capitalizeWords('hello world')).toBe('Hello World');
expect(capitalizeWords('javascript is fun')).toBe('Javascript Is Fun');
});

test('handles empty string', () => {
expect(capitalizeWords('')).toBe('');
});

test('handles single-word strings', () => {
expect(capitalizeWords('hello')).toBe('Hello');
expect(capitalizeWords('world')).toBe('World');
});

test('handles strings with special characters', () => {
expect(capitalizeWords('hello-world')).toBe('Hello-World');
expect(capitalizeWords('foo_bar')).toBe('Foo_Bar');
expect(capitalizeWords('multiple   spaces')).toBe('Multiple   Spaces');
});
});

//filterActiveUsers
const { filterActiveUsers } = require('../index.js');

describe('filterActiveUsers', () => {
test('filters active users from a mixed array', () => {
const users = [
{ name: 'Alice', isActive: true },
{ name: 'Bob', isActive: false },
{ name: 'Charlie', isActive: true }
];
const result = filterActiveUsers(users);
expect(result).toEqual([
{ name: 'Alice', isActive: true },
{ name: 'Charlie', isActive: true }
]);
});

test('returns an empty array when all users are inactive', () => {
const users = [
{ name: 'Bob', isActive: false },
{ name: 'Eve', isActive: false }
];
const result = filterActiveUsers(users);
expect(result).toEqual([]);
});

test('returns an empty array when input array is empty', () => {
const users = [];
const result = filterActiveUsers(users);
expect(result).toEqual([]);
});
});
