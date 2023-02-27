
const Intern = require('../lib/Intern');

describe('Intern test', () => {
    it('Intern class creates corresponding name', () => {
        const intern = new Intern('Tony', '22', 'tonystark@gmail.com', 'UCI');
        expect(intern.getName()).toEqual('Tony');
    });
    it('Intern class creates corresponding id', () => {
        const intern = new Intern('Tony', '22', 'tonystark@gmail.com', 'UCI');
        expect(intern.getId()).toEqual('22');
    });
    it('Intern class creates corresponding email', () => {
        const intern = new Intern('Tony', '22', 'tonystark@gmail.com', 'UCI');
        expect(intern.getEmail()).toEqual('tonystark@gmail.com');
    });
    it('Intern class creates corresponding school', () => {
        const intern = new Intern('Tony', '22', 'tonystark@gmail.com', 'UCI');
        expect(intern.getSchool()).toEqual('UCI');
    });
})