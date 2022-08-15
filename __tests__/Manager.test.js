const Manager = require("../lib/Manager");

test("Creates manager object", () => {
  const manager = new Manager("Manage", "25644", "email");

  expect(manager.name).toBe("Manage");
  expect(manager.id).toBe("25644");
  expect(manager.email).toBe("email");
});

test("gets office number", () => {
  const manager = new Manager("Manage", "25644", "email", 1);

  expect(manager.office).toBe(1);
});

test("Gets role of manager", () => {
  const manager = new Manager("Manage", "25644", "email", 1);

  expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});
