const Engineer = require('../lib/Engineer');

describe('Engineer test', () => {
    it('Engineer class creates corresponding name', () => {
        const engineer = new Engineer('Tony', '22', 'tonystark@gmail.com', 'tonystark');
        expect(engineer.getName()).toEqual('Tony');
    });
    it('Engineer class creates corresponding id', () => {
        const engineer = new Engineer('Tony', '22', 'tonystark@gmail.com', 'tonystark');
        expect(engineer.getId()).toEqual('22');
    });
    it('Engineer class creates corresponding email', () => {
        const engineer = new Engineer('Tony', '22', 'tonystark@gmail.com', 'tonystark');
        expect(engineer.getEmail()).toEqual('tonystark@gmail.com');
    });
    it('the github entered is a string', () => {
        const engineer = new Engineer('Tony', '22', 'tonystark@gmail.com', 'tonystark');
        expect(engineer.getGithub()).toEqual('tonystark');
    });
    })