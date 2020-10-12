const Intern = require('../lib/Intern.js');

test('creates intern object', () => {
    const intern = new Intern('Alex', '123', 'isit5@gohome.com', 'Engineer School');

    expect(intern.name).toEqual(expect.any(String));;
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));

    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('Alex', '123', 'isit5@gohome.com', 'Engineer School');

    expect(intern.getSchool()).toBe('Engineer School');
});

test('gets intern role', () => {
    const intern = new Intern('Alex', '123', 'isit5@gohome.com', 'Engineer School');

    expect(intern.getRole()).toBe('Intern');
});