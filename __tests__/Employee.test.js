const Employee = require("../lib/Employee");

test("creates employee object", () => {
  const employee = new Employee("Charlie", "46545", "email");

  expect(employee.name).toBe("Charlie");
  expect(employee.id).toBe("46545");
  expect(employee.email).toBe("email");
});

test("get employee name", () => {
  const employee = new Employee("Charlie", "46545", "email");

  expect(employee.getName()).toEqual(expect.stringContaining("Charlie"));
  expect(employee.getId()).toEqual(expect.stringContaining("46545"));
  expect(employee.getEmail()).toEqual(expect.stringContaining("email"));
});

test("get employee's role", () => {
  const employee = new Employee("Charlie", "46545", "email");

  expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
});
