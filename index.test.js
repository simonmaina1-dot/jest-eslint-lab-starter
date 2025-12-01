const { capitalizeWords } = require('./index.js');

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
