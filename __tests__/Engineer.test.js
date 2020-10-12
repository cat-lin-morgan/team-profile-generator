const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('Alex', '123', 'isit5@gohome.com', 'alex-pot-toe-toe');

    expect(engineer.name).toEqual(expect.any(String));;
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Alex', '123', 'isit5@gohome.com', 'alex-pot-toe-toe');

    expect(engineer.getGithub()).toBe('alex-pot-toe-toe');
});

test('gets engineer role', () => {
    const engineer = new Engineer('Alex', '123', 'isit5@gohome.com', 'alex-pot-toe-toe');

    expect(engineer.getRole()).toBe('Engineer');
});
