const Intern = require("../lib/Intern");

test("Creates Intern object", () => {
  const intern = new Intern("Intern", "25454", "email", "UCF");

  expect(intern.name).toBe("Intern");
  expect(intern.id).toBe("25454");
  expect(intern.email).toBe("email");
  expect(intern.school).toBe("UCF");
});

test("function that retrieves school", () => {
  const intern = new Intern("Intern", "25454", "email", "UCF");

  expect(intern.getSchool()).toEqual(expect.stringContaining("UCF"));
});

test("get intern's role", () => {
  const intern = new Intern("Intern", "25454", "email", "UCF");

  expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
});
