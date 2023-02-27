
const Manager = require('../lib/Manager');

describe('Manager test', () => {
    it('Manager class creates corresponding office number', () => {
        const manager = new Manager('Tony', '22', 'tonystark@gmail.com', 5);
        expect(manager.getOfficeNumber()).toEqual(5);
    });    
    it('Manager class creates corresponding name', () => {
        const manager = new Manager('Tony', '22', 'tonystark@gmail.com', 5);
        expect(manager.getName()).toEqual('Tony');
    });
    it('Manager class creates corresponding id', () => {
        const manager = new Manager('Tony', '22', 'tonystark@gmail.com', 5);
        expect(manager.getId()).toEqual('22');
    });
    it('Manager class creates corresponding email', () => {
        const manager = new Manager('Tony', '22', 'tonystark@gmail.com', 5);
        expect(manager.getEmail()).toEqual('tonystark@gmail.com');
    });
})