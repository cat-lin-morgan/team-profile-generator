const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates the employee object', () => {
    const employee = new Employee('Alex', '123', 'isit5@gohome.com');

    expect(employee.name).toEqual(expect.any(String));;
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Alex', '123', 'isit5@gohome.com');

    expect(employee.getName()).toBe('Alex');
});

test('gets employee id', () => {
    const employee = new Employee('Alex', '123', 'isit5@gohome.com');

    expect(employee.getId()).toBe('123');
});

test('gets employee email', () => {
    const employee = new Employee('Alex', '123', 'isit5@gohome.com');

    expect(employee.getEmail()).toBe('isit5@gohome.com');
});

test('gets employee role', () => {
    const employee = new Employee('Alex', '123', 'isit5@gohome.com');

    expect(employee.getRole()).toBe('Employee');
});
