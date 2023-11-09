const Plane = require('../../classes/Plane');
const Person = require('../../classes/Person');

describe('When we instantiate the Plane Class', () => {
    const plane = new Plane('test company', 'test destination');

    test('the plane obj has the correct key-values', () => {
        expect(plane.company).toBe('test company');
        expect(plane.origin).toBe('PHX');
        expect(plane.destination).toBe('test destination');
    });

    test('the plane objs private variables init correctly', () => {
        expect(plane.getPassengers()).toEqual([]);
    });

    test('the plane objs private variables can be modified', () => {
        const person = new Person('me', 'over there');
        plane.addPassenger(person);
        const outcome = {"destination": "over there", "name": "me"}

        expect(plane.getPassengers()).toContainEqual(outcome);
    });
});