const Greet = require('./greet.js', 'Greet');

    test('null value', () => {
        expect(Greet()).toBe('Hello there!')
    })

    test('String name', () => {
        expect(Greet('Maya')).toBe('Hello, Maya')
    })

    test('Capitalized name', () => {
        expect(Greet('MAYA')).toBe('HELLO MAYA!')
    })

    test('Two names in an array', () => {
        expect(Greet(['Maya', 'Albert'])).toBe('Hello, Maya, Albert')
    })

    test('Several names in an array', () => {
        expect(Greet(['Maya', 'Albert', 'Angela'])).toBe('Hello, Maya, Albert, Angela')
    })