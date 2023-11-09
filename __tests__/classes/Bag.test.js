const Bag = require("../../classes/Bag");

describe("bag tests", () => {
  const bag = new Bag(500, 1, null);

  it("create Bag", () => {
    expect(bag).toBeDefined();
  });

  it("check weight", () => {
    expect(bag.weight).toBe(500);
  });

  it("check id", () => {
    expect(bag.id).toBe(1);
  });

  it("check owner", () => {
    expect(bag.owner).toBe(undefined);
  });

  it("get owner", () => {
    expect(bag.getOwner()).toBe(null);
  });

  //   it("assign owner", () => {
  //     bag.assignOwner(Person);
  //     expect(bag.owner).toBe(Person);
  //   });
});
