const Employee = require('../lib/Employee');

describe('Employee test', () => {
    it('Employee class creates corresponding name', () => {
        const employee = new Employee('Tony', '22', 'tonystark@gmail.com');
        expect(employee.getName()).toEqual('Tony');
    });
    it('Employee class creates corresponding id', () => {
        const employee = new Employee('Tony', '22', 'tonystark@gmail.com');
        expect(employee.getId()).toEqual('22');
    });
    it('Employee class creates corresponding email', () => {
        const employee = new Employee('Tony', '22', 'tonystark@gmail.com');
        expect(employee.getEmail()).toEqual('tonystark@gmail.com');
    });
});