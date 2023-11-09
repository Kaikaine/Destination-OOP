const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag");

describe("bag tests", () => {
  const person = new Person("Me", "Town");
  const bag = new Bag(500, 1, null);

  it("create person", () => {
    expect(person).toBeDefined();
  });

  it("check name", () => {
    expect(person.name).toBe("Me");
  });

  it("check destination", () => {
    expect(person.destination).toBe("Town");
  });

  it("check bag array", () => {
    expect(person.getBags()).toStrictEqual([]);
  });

  it("add bag", () => {
    person.addBags(bag);
    expect(person.getBags()).toContain(bag);
  });

  //   it("assign owner", () => {
  //     bag.assignOwner(Person);
  //     expect(bag.owner).toBe(Person);
  //   });
});
