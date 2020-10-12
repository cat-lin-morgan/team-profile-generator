const Manager = require('../lib/Manager.js');

test('creates engineer object', () => {
    const manager = new Manager('Alex', '123', 'isit5@gohome.com', '(123) 456 - 7890');

    expect(manager.name).toEqual(expect.any(String));;
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));

    expect(manager.officeNumber).toEqual(expect.any(String));
});

test('gets manager github', () => {
    const manager = new Manager('Alex', '123', 'isit5@gohome.com', '(123) 456 - 7890');

    expect(manager.getOfficeNumber()).toBe('(123) 456 - 7890');
});

test('gets manager role', () => {
    const manager = new Manager('Alex', '123', 'isit5@gohome.com', '(123) 456 - 7890');

    expect(manager.getRole()).toBe('Manager');
});