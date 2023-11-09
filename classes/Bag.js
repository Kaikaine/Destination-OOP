class Bag {
  #owner;
  constructor(weight, id, owner) {
    this.weight = weight;
    this.id = id;
    this.#owner = owner;
  }

  getOwner() {
    return this.#owner;
  }

  assignOwner(Person) {
    this.#owner = Person;
  }
}

module.exports = Bag;
