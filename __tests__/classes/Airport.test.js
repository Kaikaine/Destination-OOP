const Airport = require('../../classes/Airport');
const Plane = require('../../classes/Plane');

describe('When we instantiate the Airport Class', () => {
    const airport = new Airport('test airport');

    test('The key-value pairs are correct', () => {
        expect(airport.name).toBe('test airport');
        expect(Airport.airportCode).toBe('PHX');
    });

    test('the planes private variables init correctly', () => {
        expect(airport.getPlanes()).toEqual([]);
    });

    test('The getter and setter functions work correctly', () => {
        const plane = new Plane('test company', 'test destination');
        airport.addPlanes(plane);
        const outcome = [{"company": "test company", "destination": "test destination", "origin": "PHX"}];
        expect(airport.getPlanes()).toEqual(outcome);
    });
});