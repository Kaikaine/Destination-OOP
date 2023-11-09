class Airport {
    #planes;
    static airportCode = 'PHX'
    constructor(name) {
        this.name = name;
        this.#planes = [];
    };

    addPlanes(plane) {
        this.#planes.push(plane);
    };

    getPlanes() {
        return this.#planes;
    };
};


module.exports = Airport;